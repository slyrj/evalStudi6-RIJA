import React from 'react'

function form() {
  return (
      <div className="contact form">
          <h3>Me Contacter</h3>
          <form  name="contact" method="post" data-netlify="true" onSubmit="submit">
            {/* champ hidden netlify */}
          <input type="hidden" name="form-name" value="contact" />

              <div className="formBox">
                  <div className="row50">
                      <div className="inputBox">
                         <span for="lastname">Nom</span>
                         <input type="text" name="lastname"placeholder="Nom"/> 
                      </div>
                      <div className="inputBox">
                          <span for="firstname">Prénom</span>
                          <input type="text" name="firstname"placeholder="Prénom"/> 
                       </div>
                  </div>

                  <div className="row50">
                      <div className="inputBox">
                         <span for="mail">Email</span>
                         <input type="email" name="email" placeholder="e-mail"/> 
                      </div>
                      <div className="inputBox">
                          <span for="phone">Tél</span>
                          <input type="tel" name="tel" placeholder="Tél"/> 
                       </div>
                  </div>

                  <div className="row100">
                      <div className="inputBox">
                         <span for="message">Message</span>
                         <textarea name="message" placeholder="Laissez votre message ici.." name="" id="" cols="30" rows="10"></textarea>
                      </div>
                   </div>   

                   <div className="row100">
                      <div className="inputBox">
                        <input className="send"   type="submit" value="Envoyer"/>
                      </div>
                   </div>  
              </div>
          </form>
      </div> 
  )
}

export default form