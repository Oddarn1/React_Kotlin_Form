package forms.service

import com.sendgrid.*

class MailService {
    fun sendEmail():Response {
        val sendgrid = SendGrid(System.getenv("SENDGRID_API_KEY"))
        val request = Request()
        request.method = Method.POST
        request.endpoint = "mail/send"
        request.body =
            "{\"personalizations\":[{\"to\":[{\"email\":\"oddarn97@gmail.com\"}],\"subject\":\"Sending with Twilio SendGrid is Fun\"}],\"from\":{\"email\":\"oddandreowren@gmail.com\"},\"content\":[{\"type\":\"text/plain\",\"value\": \"and easy to do anywhere, even with Kotlin\"}]}"
        val response = sendgrid.api(request)
        return response
    }
}