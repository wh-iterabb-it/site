function shuffleString(input) {
  var a = input.split(""),
    n = a.length

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
  }
  return a.join("")
}

function sprinkle(sprinkles, amount, icecream) {
  var scoop = ""

  for (var i = 0; i < amount; i++) {
    scoop += sprinkles.charAt(Math.floor(Math.random() * sprinkles.length))
  }

  return shuffleString(scoop + icecream)
}

function phoneticTransform(word) {
  var phonetic = [
    "Alpha",
    "Bravo",
    "Charlie",
    "Delta",
    "Echo",
    "Foxtrot",
    "Golf",
    "Hotel",
    "India",
    "Juliett",
    "Kilo",
    "Lima",
    "Mike",
    "November",
    "Oscar",
    "Pepe",
    "Queen",
    "Romeo",
    "Sierra",
    "Tango",
    "Uniform",
    "Victor",
    "Whiskey",
    "Xbox",
    "Yankee",
    "Zulu",
  ]
  var buffer = ""
  for (var i = 0; i < word.length; i++) {
    var letter = word.charCodeAt(i)
    if (65 <= letter && letter <= 90) {
      letter -= 65
      buffer += phonetic[letter].toUpperCase()
    } else {
      if (97 <= letter && letter <= 122) {
        letter -= 97
        buffer += phonetic[letter]
      } else {
        buffer += word.substring(i, i + 1)
      }
    }
    buffer += " "
  }
  return buffer
}

function replace(pass, input, quant) {
  var strArray = pass.split("")
  var lettersArray = input.split("")

  for (var i = 0; i < quant; i++) {
    var pos1 = Math.round(Math.random() * (pass.length - 1))
    var pos2 = Math.round(Math.random() * (input.length - 1))
    strArray[pos1] = lettersArray[pos2]
  }

  return shuffleString(strArray.join(""))
}

function generate(passlen, options) {
  var lowercases = "abcdefghjkmnpqrstuvwxyz"
  var uppercases = "ABCDEFGHJKLMNPQRSTUVWXYZ"
  var numbers = "23456789"
  var symbols = "!#$%&*+-=?@^_"
  var returnPass = "password"

  // adding Nosimilar characters to seed strings
  if (!options.nosimilar) {
    lowercases += "ilo"
    uppercases += "IO"
    numbers += "01"
    symbols += "|"
  }

  if (options.noamb) {
    symbols += "{}[]()/''`~,;:.<>\\"
  }

  if (options.lowercase) {
    returnPass = replace(returnPass, lowercases, Math.floor(passlen / 4))
  }

  if (options.uppercase) {
    returnPass = replace(returnPass, uppercases, Math.floor(passlen / 4))
  }

  if (options.numbers) {
    returnPass = replace(returnPass, numbers, Math.floor(passlen / 4))
  }

  if (options.symbols) {
    returnPass = replace(returnPass, symbols, Math.floor(passlen / 8))
  }

  return returnPass
}

export { generate }
