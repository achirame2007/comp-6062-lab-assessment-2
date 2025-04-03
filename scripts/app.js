/// Create a new Vue app
const app = Vue.createApp({
    /// Define the data for the app
    data() {
        return {
            myFullName: 'Atharva Chirame',
            pressureMonitorValue: 65,
            pressureMonitorLevels: [
                 { id: 'danger-low', color: 'danger', label: 'Danger - Low!', min: 0, max:
                10 },
                { id: 'warn-low', color: 'warning', label: 'Warning - Low', min: 11, max:
                30 },
                { id: 'safe', color: 'safe', label: 'Safe', min: 31, max: 70 },
                { id: 'warn-high', color: 'warning', label: 'Warning - High', min: 71,
                max: 90 },
                { id: 'danger-high', color: 'danger', label: 'Danger - High', min: 91,
                max: 100 }
                ]
        };
    },
    /// Define the methods for the app
    methods: {
        isActive(pressureLevel) {
           if(this.pressureMonitorValue >= pressureLevel.min && this.pressureMonitorValue <= pressureLevel.max)
           {
            
             return true;
           }
           else
           {
             return false;
           }
           
        }
    }
});

/// Mount the app to the #app element
app.mount('#app');
