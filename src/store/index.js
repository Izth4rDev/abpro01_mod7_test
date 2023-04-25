import { createStore } from 'vuex'
import { Courses } from '@/services/cursos'


export default createStore({
  state: {
    cursos: Courses.getAllCourses(),
    //desarrollado por Miguel
    usuarioConectado: '',
    estado: false,
    courses: [],
    loaded: false
  },
  getters: {
  },
  mutations: {
    cargarUsuario(state, email){
      state.usuarioConectado = email;
      console.log(state.usuarioConectado);
    },
    limpiarUsuario(state){
      state.usuarioConectado = '';
      //limpia el usuario conectado
    },
    addCourse(state, { id, data }) {
      //insercion de los cursos en el arreglo
      state.courses.push({
        id,
        nombre: data.nombre,
        precio: data.precio,
        duracion: data.duracion,
        descripcion: data.descripcion,
        inscritos: data.inscritos,
        estado: data.estado,
        cupos: data.cupos,
        img: data.img
      });

      console.log(state.courses)
    }
  },
  actions: {
  },
  modules: {
  }
})
