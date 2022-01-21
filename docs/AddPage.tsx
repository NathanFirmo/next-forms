import { MarkdownRender } from '../components'

const markdown = `
# How to add a page

## Create the file

Create a copy of the file ***docs/Template.tsx*** inside the **docs** folder.

## Export the created page

Assuming your page name is ***'NewPage.tsx'***, you should open the
***'index.ts'*** file inside the **docs** folder and add the following line:

~~~js
export { default as NewPage } from './NewPage'
~~~
## Put the text

Just change the **markdown** variable, putting the text you want in it.
At this stage it is good that you have already added the tab to the menu,
because as you type, you will already see the markdown rendered on your screen.

## Add images

### Step 1

Add the image you want in the images folder.

### Step 2

Import the file to your page.

### Step 3

Place the **![**image**]** element at the point where you want to place the image,
and then pass its properties inside
of the ***MarkdownRender*** component, like this:

~~~js
import { MarkdownRender } from '../components'
import sample from '../img/sample.png'

<MarkdownRender 
  markdownText={markdown}
  imagesProps={[
    {
      src: sample,
      alt: 'sample',
      width: 700,
      height: 400
    }
  ]}
/>
~~~

![alert]

## Add the alert component

Just place the **![**alert**]** element at the point where you want
put the alert, and then pass its properties inside
of the ***MarkdownRender*** component. The '**type**' property accepts the parameters
'***info***' and '***warning***', which display two different types of alerts.

~~~js
import { MarkdownRender } from '../components'

<MarkdownRender 
  markdownText={markdown}
  alertsProps={[{
    type: 'info',
    message: 'This is a message'
  }]}
/>
~~~
`
const message = `As images serão renderizadas na mesma ordem que estão
no array de imagesProps.`
export default function Template() {

  return (
    <MarkdownRender
      markdownText={markdown}
      alertsProps={[
        {
          type: 'info',
          message: message
        }
      ]}
    />
  )
}