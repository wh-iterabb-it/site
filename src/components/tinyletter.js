import React from "react"

const TinyLetter = () => (
  <form
    action="https://tinyletter.com/wh-iterabb-it"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://tinyletter.com/wh-iterabb-it', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
  >
    <p>
      <label for="tlemail">
        Enter your email address to get our monthly zine
      </label>
    </p>
    <p>
      <input type="text" name="email" id="tlemail" />
    </p>
    <input type="hidden" value="1" name="embed" />
    <input type="submit" value="Subscribe" />
  </form>
)

export default TinyLetter
