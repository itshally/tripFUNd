import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Container  } from 'react-bootstrap';
import { FormControl  } from 'react-bootstrap';
import { Button   } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../CalculateForm/CalculateForm.css"
import './CalculateForm.css';

class CalculateForm extends Component {
    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
render() {
return (
    <div>
        <Container><h1>Create Trip</h1>
    <form>
        <p>FROM
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />      
          </p><p>TO
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />      
          </p>
        <p>Country<input type='text' placeholder='Country' /></p>
        <p>City<input type='text' placeholder='City' /></p>
    </form>
    <p>Trip Cost</p>
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Append>
        <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup.Append>
    </InputGroup>
    <p>Budget</p>
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Append>
        <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup.Append>
    </InputGroup>
    <div>
    <br></br>
    <br></br>
    <Button variant="primary" size="lg">Calculate</Button>
    <br></br>
    <br></br>
    </div>
    </Container>
</div>
);
}
}
export default CalculateForm;