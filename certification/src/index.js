import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  clientId: 'certificate',
})

const topic = 'issue-certificate'
const consumer = kafka.consumer({ groupId: 'certificate-group' })

const producer = kafka.producer();

async function run() {
  await consumer.connect()
  await consumer.subscribe({ topic })
  await producer.connect()


  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
      console.log(`- ${prefix} ${message.key}#${message.value}`)

      const payload = JSON.parse(message.value);
      producer.send({
        topic: 'certification-response',
        messages: [
          { value: `User certificate generated! name: ${payload.user.name}  course: ${payload.course}` }
        ]
      })
    },
  })
}

run().catch(console.error)