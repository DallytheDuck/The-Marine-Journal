/* eslint-disable max-len */
<template>
    <div>
        <div>
            <div>
                <p>CONTACT</p>
            </div>
            <div>
                <p>This is your item description. Use this space to add a description of the services,
                   products, team members or any other items you want to highlight on your site. Have a lot to say?
                    Easily turn any item into a full page by clicking ‘Create a page from this item’ in the edit panel.</p>
            </div>
                <p>emmaswleung@gmail.com</p>
            <div>
                <a target="_blank" href="https://www.instagram.com/emmaswleung/"><img src="../assets/instagram-vector.png" alt="Instagram Vector by WIX"></a>
            </div>
        </div>
        <div>
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

#contact-section {
    background-color: rgb(228, 239, 242);
    height: 80vh;
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