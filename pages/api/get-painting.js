const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: process.env.OPENAI
})
const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  if (typeof req.body.prompt === "string") {
    const response = await openai.createImage({
<<<<<<< HEAD
      prompt: `${req.body.prompt} .`,
=======
      prompt: `${req.body.prompt}`,
>>>>>>> 63e4226 (changed the api key again2)
      n: 1,
      size: "512x512"
    })

    res.status(200).json({ text: response.data.data[0].url })
  } else {
    res.status(200).json({ text: "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg" })
  }
}
