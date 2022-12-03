// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const handler = async (event) => {
  const { name, ph, email, requirement, add, city, state, pin } =
    event.queryStringParameters

  const msg = {
    to: process.env.RECEIVER_EMAIL,
    from: process.env.SENDER_EMAIL, // Use the email address or domain you verified above
    subject: `New submission to S4interiors.in by ${name}`,
    text: `${requirement} @ ${city}`,
    html: `<h1>${requirement} @ ${city}</h1><p style="font-size:18px">Name: <strong>${name}</strong><br/>Phone no: <strong>${ph}</strong><br/>Email:<strong>${email}</strong><br/>Requirement:<strong>${requirement}</strong><br/>address:<strong>${add}, ${city}, ${state}, ${pin}</strong></p>`,
  }
  try {
    await sgMail.send(msg)
    return {
      statusCode: 200,
      body: JSON.stringify(msg),
    }
  } catch (error) {
    console.error(error)

    if (error.response) {
      console.error(error.response.body)
    }
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    }
  }
}

module.exports = { handler }
