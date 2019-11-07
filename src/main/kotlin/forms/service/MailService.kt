package forms.service

import com.sendgrid.*
import io.github.cdimascio.dotenv.Dotenv

class MailService {
    fun sendEmail(name:String, email:String):Response {
        val dotenv= Dotenv.load()
        //.env file containing fields SENDGRID_API_KEY and RECIEVER_EMAIL
        val sendgrid = SendGrid(dotenv["SENDGRID_API_KEY"])
        val receiver=dotenv["RECEIVER_EMAIL"]
        val request = Request()
        request.method = Method.POST
        request.endpoint = "mail/send"
        request.body =
            "{\"personalizations\":" +
                    "[{\"to\":[{\"email\":\"$receiver\"}]," +
                    "\"subject\":\"Ny registrering i skjema\"}]," +
                    "\"from\":{\"email\":\"$email\"}," +
                    "\"content\":[{\"type\":\"text/plain\"," +
                    "\"value\": \"Bruker ved navn $name har registrert seg i case-skjemaet til Odd André Owren.\"}]}"
        val response = sendgrid.api(request)
        return response
    }
}