import { Injectable } from '@angular/core';
declare let alertify: any;
// Configuración
// https://alertifyjs.com/guide.html
// https://github.com/MohammadYounes/AlertifyJS/
alertify.defaults = {
   // notifier defaults
   notifier: {
    // auto-dismiss wait time (in seconds)
        delay: 5,
    // default position
        position: 'bottom-right',
    // adds a close button to notifier messages
        closeButton: true,
    // provides the ability to rename notifier classes
        classes : {
            base: 'alertify-notifier',
            prefix: 'ajs-',
            message: 'ajs-message',
            top: 'ajs-top',
            right: 'ajs-right',
            bottom: 'ajs-bottom',
            left: 'ajs-left',
            center: 'ajs-center',
            visible: 'ajs-visible',
            hidden: 'ajs-hidden',
            close: 'ajs-close'
        },

         // language resources
         glossary: {
          // dialogs default title
          title: 'AlertifyJS',
          // ok button text
          ok: 'OK',
          // cancel button text
          cancel: 'Cancel'
      },

    },
}

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, function(e) {
      //e representa el evento click
      if(e){
          okCallback();
      }else {}
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message) {
    alertify.message(message);
  }
}
