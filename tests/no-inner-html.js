const rule = require('../lib/rules/no-inner-html')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester()

ruleTester.run('no-innter-html', rule, {
  valid: [
    {
      code: 'document.createElement("js-flash-text").textContent = ""'
    },
    {
      code: 'document.createElement("js-flash-text").textContent = "foo"'
    }
  ],
  invalid: [
    {
      code: 'document.createElement("js-flash-text").innerHTML = "foo"',
      output: 'document.createElement("js-flash-text").textContent = "foo"',
      errors: [
        {
          message: 'Using innerHTML poses a potential security risk and should not be used. Prefer using textContent.',
          type: 'Identifier'
        }
      ]
    },
    {
      code: 'document.querySelector("js-flash-text").innerHTML = "<div>code</div>"',
      output: 'document.querySelector("js-flash-text").textContent = "<div>code</div>"',
      errors: [
        {
          message: 'Using innerHTML poses a potential security risk and should not be used. Prefer using textContent.',
          type: 'Identifier'
        }
      ]
    },
    {
      code: 'document.querySelector("js-flash-text").innerHTML = ""',
      output: 'document.querySelector("js-flash-text").textContent = ""',
      errors: [
        {
          message: 'Using innerHTML poses a potential security risk and should not be used. Prefer using textContent.',
          type: 'Identifier'
        }
      ]
    }
  ]
})
