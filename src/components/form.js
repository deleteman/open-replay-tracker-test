import Form  from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';
import { Alert, Button } from 'react-bootstrap';

const {Group, Label, Control} = {...Form}



export default function MyForm () {

const { register, handleSubmit, formState } = useForm();

  const onSubmit = data => {
    if(Math.random() > 0.1) {
      throw new Error("There was a terrible error during data submittion")
    }
  }
    
    return (<form onSubmit={handleSubmit(onSubmit)} className="simpleForm">
      {/* alerting of errors */}
      {(!formState.isValid && formState.isSubmitted) ?
      <Alert variant="danger"   >
        {Object.values(formState.errors).map( (e,idx) => {
          return (<p key={idx}>{e.message}</p>)
        })}
      </Alert>
      :
      <Alert variant="success"   >Please fill in the form</Alert>
      }

      <Group>
        <Label>
          First name
        </Label>
        <Control type="text" placeholder="First name" {...register("First name", {
          required: {
            value: true,
            message: "You must specify your first name before moving forward"
        }, 
        pattern: {
          value: /^[a-zA-Z]+$/,
          message: "That's not a valid name where I come from..."
        }
        })} />
      </Group>

      <Group>
        
        <Label>Last Name</Label>
        <Control type="text" placeholder="Last name" {...register("Last name", {
          required: {
            value:true,
            message: "Please, add your last name"
          },
          pattern: {
            value: /^[a-zA-Z]+$/,
            message: "I don't think you understood exactly what to do here, did you?"
          }, 
          maxLength: {
            value: 100,
            message: "That's way too long to be a real last name, try again"
         }
        })} />
      </Group>
      <Group>
        <Label>Email</Label>
        <Control type="text" placeholder="Email" {...register("Email", {
          required: {
            value: true,
            message: "You need to specify a valid email address"
          }, 
          pattern: {
            value: /^\S+@\S+$/i,
            message: "I think I said _valid_, didn't I?"
         }
        })} />
      </Group>
      <Group>
        <Label>Mobile number</Label>
        <Control  type="tel" placeholder="Mobile number" {...register("Mobile number", {
          required: {
            value: true,
            message: "Please add your mobile phone number, I won't call you, promise!"
          }, 
          pattern: {
            value: /^[0-9+-]+$/,
            message: "This is not a valid mobile phone to me, try again!"
          }, 
          minLength: {
            value: 6,
            message: "This number is too short, not gotta fly, try again"
          }, 
          maxLength: {
            value: 12,
            message: "...And now it's too damn long, make sure the number is right, would you?"
          } })} />
      </Group>
      <Group>
        <Label>Comments</Label>
        <Control as="textarea"  {...register("Your comments", {
          required: {
            value: true,
            message: "I really wanna know what you think about this form, so leave a comment please!"
          }, 
          maxLength: {
            value: 280,
            message: "But don't over do it, 280 characters should be more than enough!"
          }
        })} />

        <Button type="submit" >
          Send
        </Button>
      </Group>
    </form>
    )
}