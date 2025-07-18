const rndmMailBool = `https://flynn.boolean.careers/exercises/api/random/mail`
const mailList = document.getElementById(`mail-list`)

const rndm10mail = ((list) => {
  axios.get(rndmMailBool).then((res) => {

    list.innerHTML = ``
    for(let i = 0; i < 10; i++) {
      let rndmMail = res.data.response
      list.innerHTML += `<li>${rndmMail}</li>`
    }
    console.log(mailList)
  })
})

rndm10mail(mailList)