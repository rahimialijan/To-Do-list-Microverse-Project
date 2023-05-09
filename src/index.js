import _ from 'lodash';
import  './style.css'

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello!', 'world'], ' ');

   return element;
 }

 document.body.appendChild(component());