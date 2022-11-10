import EQUIPOS from "./equipos";


const PARTIDOS = [
  {
    id: 1,
    titulo: "Regatas vs Uncuyo",
    equipo1: EQUIPOS.find((eq) => eq.nombre === "Club Mendoza de Regatas"),
    equipo2: EQUIPOS.find((eq) => eq.nombre === "Universidad Nacional de Cuyo"),
    categoria: "Juvenil Masculino",
    sede: "Polideportivo Ribosqui",
    fecha: "Domingo 14 de mayo",
    torneo: "Apertura 2022",
    jornada: "Fecha 5",
    resultado: {
      total_str: "24 - 22",
      final_eq1: "24",
      final_eq2: "22",
      parcial_eq1: "11",
      parcial_eq2: "11",
    },
  },
  {
    id: 2,
    titulo: "Regatas vs Uncuyo",
    equipo1: EQUIPOS.find((eq) => eq.nombre === "Club Mendoza de Regatas"),
    equipo2: EQUIPOS.find((eq) => eq.nombre === "Universidad Nacional de Cuyo"),
    categoria: "Juvenil Masculino",
    sede: "Polideportivo Ribosqui",
    fecha: "Domingo 14 de mayo",
    torneo: "Apertura 2022",
    jornada: "Fecha 5",
    resultado: {
      total_str: "24 - 22",
      final_eq1: "24",
      final_eq2: "22",
      parcial_eq1: "11",
      parcial_eq2: "11",
    },
  },
  {
    id: 3,
    titulo: "Regatas vs Uncuyo",
    equipo1: EQUIPOS.find((eq) => eq.nombre === "Club Mendoza de Regatas"),
    equipo2: EQUIPOS.find((eq) => eq.nombre === "Universidad Nacional de Cuyo"),
    categoria: "Juvenil Masculino",
    sede: "Polideportivo Ribosqui",
    fecha: "Domingo 14 de mayo",
    torneo: "Apertura 2022",
    jornada: "Fecha 5",
    resultado: {
      total_str: "24 - 22",
      final_eq1: "24",
      final_eq2: "22",
      parcial_eq1: "11",
      parcial_eq2: "11",
    },
  },
  {
    id: 4,
    titulo: "Regatas vs Uncuyo",
    equipo1: EQUIPOS.find((eq) => eq.nombre === "Club Mendoza de Regatas"),
    equipo2: EQUIPOS.find((eq) => eq.nombre === "Universidad Nacional de Cuyo"),
    categoria: "Juvenil Masculino",
    sede: "Polideportivo Ribosqui",
    fecha: "Domingo 14 de mayo",
    torneo: "Apertura 2022",
    jornada: "Fecha 5",
    resultado: {
      total_str: "24 - 22",
      final_eq1: "24",
      final_eq2: "22",
      parcial_eq1: "11",
      parcial_eq2: "11",
    },
  },
  {
    id: 5,
    titulo: "Regatas vs Uncuyo",
    equipo1: EQUIPOS.find((eq) => eq.nombre === "Club Mendoza de Regatas"),
    equipo2: EQUIPOS.find((eq) => eq.nombre === "Universidad Nacional de Cuyo"),
    categoria: "Juvenil Masculino",
    sede: "Polideportivo Ribosqui",
    fecha: "Domingo 14 de mayo",
    torneo: "Apertura 2022",
    jornada: "Fecha 5",
    resultado: {
      total_str: "24 - 22",
      final_eq1: "24",
      final_eq2: "22",
      parcial_eq1: "11",
      parcial_eq2: "11",
    },
  },
];

//fetch("http://localhost:5000/partidos").then((res) => res.json()).then(data => PARTIDOS = data) 

export default PARTIDOS;
