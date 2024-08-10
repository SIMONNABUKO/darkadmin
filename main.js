import './style.css'
import 'remixicon/fonts/remixicon.css'
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
document.addEventListener('alpine:init', () => {
    Alpine.data('data', () => ({
        showMessages: false,
        showNotifications: false,
        showLanguages: false,
        menuIsMinimised: false,

        toggleMessages() {
            this.showMessages = !this.showMessages
            this.showNotifications = false
            this.showLanguages = false
        },
        toggleNotifications() {
            this.showNotifications = !this.showNotifications
            this.showMessages = false
            this.showLanguages = false
        },
        toggleLanguages() {
            this.showLanguages = !this.showLanguages
            this.showMessages = false
            this.showNotifications = false
        },
        toggleMenu(){
            
            this.menuIsMinimised = !this.menuIsMinimised
            console.log("MENU MINIMIZED: ", this.menuIsMinimised);
        }
    }))
})
Alpine.start()



