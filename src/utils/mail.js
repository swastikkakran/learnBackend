import Mailgen from "mailgen"
import nodemailer from "nodemailer"


const sendEmail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: "task manager",
            link: "https://www.taskmanage.com"
        }
    })

    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)
    const emailHtml = mailGenerator.generate(options.mailgenContent)


    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS,
        }
    })


    const mail = {
        from: "mail@task.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    }


    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Error. cannot send mail.")
        console.error("error: ", error)
    }
}

const emailVerificationMailgenContent = (username, emailVerificationUrl) => {
    return {
        body: {
            name: username,
            intro: 'Welcome to Basecampy! We\'re very excited to have you on board.',
            action: {
                instructions: 'To get started with Basecampy, please click here:',
                button: {
                    color: '#25d622', // Optional action button color
                    text: 'Confirm your account',
                    link: emailVerificationUrl
                }},
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
}}

const passwordResetMailgenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: 'We have recieved a password reset request.',
            action: {
                instructions: 'To get started with reset procedure, please click here:',
                button: {
                    color: '#22BC66', // Optional action button color
                    text: 'Password Reset',
                    link: passwordResetUrl
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
}


export {emailVerificationMailgenContent, passwordResetMailgenContent, sendEmail}
