import emailjs from 'emailjs-com'
import { Layout } from "./Layout"
const keys = require('../keys')

export const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(keys.serviceID, keys.templateID, e.target, keys.userID).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err))
    }

    return (
        <Layout>
        <section class="mb-4">

            <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
            <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>

            <div class="row">

                <div class="col-md-12 mb-md-0 mb-5">
                    <form name="contact-form" onSubmit ={sendEmail}>

                        <div class="row">

                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control"/>
                                    <label for="name" class="">Your name</label>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control"/>
                                    <label for="email" class="">Your email</label>
                                </div>
                            </div>

                        </div>


                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control"/>
                                    <label for="subject" class="">Subject</label>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-md-12">

                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                    <label for="message">Your message</label>
                                </div>

                            </div>
                        </div>

                        <input type="submit"
                                value="send"
                                className="form-control btn btn-primary"
                                style={{ marginTop: "30px"}} />
                    </form>
                </div>

                

            </div>

        </section>
        </Layout>
    )
}
