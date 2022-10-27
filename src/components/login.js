import UserController from '../controllers/UserController';
import 'particles.js';
import * as feather from 'feather-icons';

Cake.create('login','#login',{
    root:'#app',
    data(){

    },
    handlers:{
        async destroy(){
            await this.reset();
        },
        isConnected(){
            console.log('login is connected');
            feather.replace();
            particlesJS("particles-js", {
                "particles": {
                  "number": {
                    "value": 88,
                    "density": {
                      "enable": true,
                      "value_area": 700
                    }
                  },
                  "color": {
                    "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 15
                    }
                  },
                  "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1.5,
                      "opacity_min": 0.15,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 2.5,
                    "random": false,
                    "anim": {
                      "enable": true,
                      "speed": 2,
                      "size_min": 0.15,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 110,
                    "color": "#33b1f8",
                    "opacity": 0.25,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 1.6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              });
        },
        toggle(e){
            let target = e.target;
            let gr = target.closest('.input-group');
            let input = gr.querySelector('INPUT');
            input.type = input.type == 'text'?'password':'text';
        },
        async submit(e){
            let json = this.utils.toFormData(e.target,{json:true});

            console.log(json);

            // await this.fire('success','Login successful');

            // await this.$router.login({
            //     token:'asdasd',
            //     role:'admin',
            //     data:{},
            // });


 
            let {username, password} = json;




            await this.fire('spin','login');

            try {
                let user = await UserController.checkUsername({username});
                // user = await user.json();


                if(user){
                    this.fire('spinout','login');

                    let $this= this;

                    let login = await UserController.login(username, password);

                    // console.log(163,login);

                    if(login){
                        await this.fire('success','login successful');

                        await this.$router.login({
                            token:login.token,
                            role:login.role,
                            data:login.data,
                        });

                    } else {
                        this.fire('error','wrong password');
                    };
                } else {
                    this.fire('spinout','login');
                    this.fire('error','user not found');
                };
            } catch(err){
                this.fire('spinout','login');
                this.fire('error',err.message);
            }
        },

    },
    subscribe:{

    },
});