<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div v-if="!submitted">
            <h3 class="text-center">Create Student</h3>
            <!-- This uses bootstrap based validation -->
            <form @submit.prevent="handleSubmitForm" novalidate="true" class="needs-validation">
                <div class="form-group">
                    <label for="student.firstName" class="form-label">First Name*</label>
                    <input type="text" class="form-control" v-model="student.firstName" required>
                </div>
                <div class="form-group">
                    <label>Last Name*</label>
                    <input type="text" class="form-control" v-model="student.lastName" required>
                </div>

                <div class="form-group">
                    <label for="email">Email*</label>
                    <input 
                        v-model="email" 
                        v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}"
                        v-on:blur="emailBlured = true"
                        required>
                    <div class="invalid-feedback">A valid email address is required</div>
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="tel" class="form-control" pattern="^\d{3}-\d{3}-\d{4}$" v-model="student.phoneNumber" 
                    placeholder="XXX-XXX-XXXX" aria-describedby="phoneHelpBlock" required>
                    <small id="phoneHelpBlock" class="form-text text-muted">
                            10 digit phone number should be entered with dashes
                    </small>
                </div>

                <div class="form-group">
                    <label>Student ID</label>
                    <input type="text" class="form-control" v-model="student.studentID" required>
                </div>
                
                <button class="btn btn-danger mt-3">Create</button>
            </form>
            </div>
            <div v-else class="alert alert-success">
                    <h5>Thank you</h5>
                    <p>Your validation was a success!</p>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        studentID: "",
      },
      email: '',
      emailBlured: false,
      valid: false,
      submitted: false,
    };
  },
  methods: {
     validate : function(){
      this.emailBlured = true;
       if( this.validEmail(this.email)){
          this.valid = true;
          this.student.email = this.email;
       }
       //adding more validation for the other fields
       // ...
    },
    validEmail : function(email) {
        //setup regex between slashes
        var re = /(.+)@(.+){2,}\.(.+){2,}/;
        return re.test(email.toLowerCase());
    },
    handleSubmitForm() {
      this.validate();
      if (this.valid) {
        let apiURL = "http://localhost:3001/student";

        axios
          .post(apiURL, this.student)
          .then(() => {
            this.student = {
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              studentID: "",
            };
            //this will trigger the message
            this.submitted = true;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>