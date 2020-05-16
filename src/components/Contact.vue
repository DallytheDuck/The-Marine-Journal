/* eslint-disable max-len */
<template>
    <div id="contact-section">
        <div class="sub-sections">
                <div>
                    <div id="section-title">CONTACT</div>
                </div>
                <div>
                    <p id="section-text">Thanks for your interest in The Marine Journal. 
                        For more information, feel free to get in touch and I will get back to you soon! 
                        Please contact me by Instagram or e-mail for fast responses.</p>
                </div>
                    <p>emmaswleung@gmail.com</p>
                <div>
                    <a target="_blank" href="https://www.instagram.com/emmaswleung/"><img id="instagram" src="../assets/instagram-vector.png" alt="Instagram Vector by WIX"></a>
                </div>
        </div>
        <div class="sub-sections">
            <div>
                <div>
                    <input type ="text" class="input split input-height" style="margin-right: 9%" placeholder="Name"/>
                </div>

                <div>
                    <input type ="text" class="input split input-height" placeholder="E-mail"/>
                </div>
            </div>
            <div>
                <div>
                    <input type ="text" class="input other-input input-height" placeholder="Subject"/>
                </div>

                <div>
                    <textarea type ="text" class="input other-input input-height" style="margin-top: 10px" placeholder="Type your question/Report a bug"/>
                </div>
            </div>
            <md-field>
                <button id="submit-button">Submit</button>
            </md-field>
        </div>
    </div>
</template>


<script>

export default {
  name: 'Contact',
  components: {
  },
};

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.textarea {
    font-family: Avenir, Helvetica, Arial, sans-serif
}
input[type="text"] {
    font-size:18px;
}
textarea[type="text"] {
    font-size:18px;
}
#contact-section {
    background-color: rgb(228, 239, 242);
    height: 80vh;
}
.input-height {
    height: 70px;
}
.split {
    float: left;
    width: 45%;
}
.other-input {
    width: 100%;
}
.sub-sections {
    width: 30vw;
    padding-top: 22vh;
    padding-left: 9vw;
    padding-right: 9vw;
    float: left;
    vertical-align: center;
}
.input {
    background-color: rgb(228, 239, 242);
    border-style: hidden;
    border-bottom-style: solid;
    border-bottom-color: #2c3e50;
    border-width: 1px;
}
.input:focus {
    outline: none;
}
#submit-button {
    border-radius: 0;
    background-color: #2c3e50;
    color: white;
    border-width: 0px;
    font-size: 20px;
    margin: 10px;
}
#split {
    float: left;
}
textarea {
    resize: none;
}
#section-title {
    font-size: 40px;
    padding-top: 30px;
    padding-bottom: 10px;
    margin: 0px;
}
#section-text {
    font-size: 18px;
}
#instagram {
    width: 50px;
    height: 45px;
}
</style>