import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Message from "./Message";

function Chat({user}) {
    const [message, setMessage] = useState('')
    console.log(user._id)

    return (
        <div>
            Chat
            <div>
                <Message sent = {true}/>
                <Message/>

            </div>

            <Form>
                <FormGroup>
                    <Label for="message">
                        Send Message
                    </Label>
                    <Input
                        id="message"
                        name="message"
                        placeholder="Type something"
                        type="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />


                </FormGroup>





                <Button color="primary">
                    Send

                </Button>
            </Form>

        </div>
    )
}

export default Chat;