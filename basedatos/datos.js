
// ARCHIVO DE DATOS CENTRALIZADO

//lista que contiene la informacion de los elementos que
// se mostraran en la pagina principal
const elementos_carrusel = [
  {
    nombre: "Aircraft Maintenance",
    descripcion: "Inspection, Repair & Overhaul Services",
    imagen: "img/A-Check.jpg",
  },
  {
    nombre: "Preventive and Scheduled Maintenance Programs",
    descripcion: "service A-Check, B-Check",
    imagen: "img/preventive.jpg",
  },
  {
    nombre: "Major Maintenance Services",
    descripcion: "service C check, D check",
    imagen: "img/C-check.jpg",
  },
];
const lista_categorias = [
  {
    codigo: "101",
    nombre: "Inspeccion",
    descripcion: "Inspection, Repair & Overhaul Services",
    imagen: "img/inspection.jpg",
  },
  {
    codigo: "102",
    nombre: "Repair",
    descripcion: "STC, Modifications",
    imagen: "img/repairs.jpg",
  },
  {
    codigo: "103",
    nombre: "Overhaul",
    descripcion: "Helicopter",
    imagen: "img/overhaul.jpg",
  },
  {
    codigo: "104",
    nombre: "Modification_STC",
    descripcion: "Aircraft",
    imagen: "img/modification.png",
  },
  {
    codigo: "105",
    nombre: "Services Boletin",
    descripcion: "Aircraft",
    imagen: "img/repair nose lip.jpg",
  },
  {
    codigo: "106",
    nombre: "Service A-Check",
    descripcion: "Aircraft",
    imagen: "img/A-Check.jpg",
  },
  {
    codigo: "107",
    nombre: "Service B-CheckC",
    descripcion: "Aircraft",
    imagen: "img/B-Check.jpg",
  },
  {
    codigo: "108",
    nombre: "Service C-Check",
    descripcion: "Aircraft",
    imagen: "img/C-Check.jpg",
  },
  {
    codigo: "109",
    nombre: "Service D-Check",
    descripcion: "Aircraft",
    imagen: "img/D-Check.jpg",
  },
  {
    codigo: "110",
    nombre: "Contol_Corrotion_Program",
    descripcion: "Aircraft",
    imagen: "img/corrotion.jpg",
  },
  {
    codigo: "111",
    nombre: "Overnight",
    descripcion: "Aircraft",
    imagen: "img/Overnight.jpg",
  },
  {
    codigo: "112",
    nombre: "Equipment and Supplies",
    descripcion: "Aircraft",
    imagen: "img/Equipment and Supplies.jpg",
  },
];
const Serviceslist = [
  {
    codigo: "image 1",
    nombre: "inspection",
    descripcion: "Sheet_Metal_Composite_Avionic_Hydraulic_Power",
    codigo_categoria: "101",
  },

  {
    codigo: "image 2",
    nombre: "Repair",
    descripcion: "Sheet_Metal_Composite_Avionic_Hydraulic_Power",
    codigo_categoria: "102",
  },

  {
    codigo: "image 3",
    nombre: "overhaul",
    descripcion: "Sheet_Metal_Composite_Avionic_Hydraulic_Power",
    codigo_categoria: "103",
  },

  {
    codigo: "image 4",
    nombre: "Modification_STC",
    descripcion: "Sheet_Metal_Composite_Avionic_Hydraulic_Power",
    codigo_categoria: "104",
  },

  {
    codigo: "image 5",
    nombre: "Services Boletin",
    descripcion: "Sheet_Metal_Composite_Avionic_Hydraulic_Power",
    codigo_categoria: "105",
  },

  {
    codigo: "image 6",
    nombre: "A-Check",
    descripcion: "Sheet_Metal_Composite_Avionic_Hydraulic_Power",
    codigo_categoria: "106",
  },

  {
    codigo: "image 7",
    nombre: "B-Check",
    descripcion: "Sheet_Metal_Composite_Avionic_Hydraulic_Power",
    codigo_categoria: "107",
  },

  {
    codigo: "image 8",
    nombre: "C-Check",
    descripcion: "Sheet_Metal_Composite_Avionic_Hydraulic_Power",
    codigo_categoria: "108",
  },

  {
    codigo: "image 9",
    nombre: "D-Check",
    descripcion: "Sheet_Metal_Composite_Avionic_Hydraulic_Power",
    codigo_categoria: "109",
  },

  {
    codigo: "image 10",
    nombre: "Control_Corrotion_Program",
    descripcion: "Sheet_Metal_Composite_Avionic_Hydraulic_Power",
    codigo_categoria: "110",
  },

  {
    codigo: "image 11",
    nombre: "Overnight",
    descripcion: "Sheet_Metal_Composite_Avionic_Hydraulic_Power",
    codigo_categoria: "111",
  },

  {
    codigo: "image 12",
    nombre: "Equipment and Supplies",
    descripcion: "Sheet_Metal_Composite_Avionic_Hydraulic_Power",
    codigo_categoria: "112",
  },
];

//lista que representa el carrito de compras del usuario o typo de servicio

const Services = [];

// ===============================
// LISTA DE SERVICIOS AIRHUB (Centralizada para shop.html y shop-single.html)
// ===============================
const Services_List = [
  {
    codigo: "101",
    nombre: "Inspection",
    descripcion: "Sheet Metal, Composite, Avionic, Hydraulic, Power",
    imagen: "img/inspection.jpg",
    imagenes: ["img/inspection.jpg", "img/inspection2.jpg"],
    precio: "By Contract",
    tiempo: "By Condition",
    rating: 5,
  },
  {
    codigo: "102",
    nombre: "Repair",
    descripcion: "Corrective and Preventive Repair Services",
    imagen: "img/repairs.jpg",
    imagenes: ["img/repairs.jpg", "img/repairs2.jpg"],
    precio: "By condition",
    tiempo: "By Order to Manufacturer I.A.W: MM,SRM,OHM,CPM, & Aeronautical Regulations",
    rating: 5,
  },
  {
    codigo: "103",
    nombre: "Overhaul",
    descripcion: "General overhaul of aircraft components",
    imagen: "img/overhaul.jpg",
    imagenes: ["img/overhaul.jpg", "img/overhaul2.jpg"],
    precio: "By Condition",
    tiempo: "By Order to Manufacturer I.A.W: MM,SRM,OHM,CPM, & Aeronautical Regulations",
    rating: 5,
  },
  {
    codigo: "104",
    nombre: "Modification_STC",
    descripcion: "Aircraft modifications with approved STC",
    imagen: "img/modification.png",
    imagenes: ["img/modification.png", "img/modification2.jpg"],
    precio: "By condition",
    tiempo: "By Order to Manufacturer I.A.W: MM,SRM,OHM,CPM, & Aeronautical Regulations",
    rating: 4,
  },
  {
    codigo: "105",
    nombre: "Services Boletin",
    descripcion: "Boletines de Servicio del fabricante",
    imagen: "img/repair nose lip.jpg",
    imagenes: ["img/repair nose lip.jpg", "img/boletin2.jpg"],
    precio: "By Contrac",
    tiempo: "By Order to Manufacturer I.A.W: MM,SRM,OHM,CPM, & Aeronautical Regulations",
    rating: 4,
  },
  {
    codigo: "106",
    nombre: "Service A-Check",
    descripcion: "Maintenance A-Check Program",
    imagen: "img/A-Check.jpg",
    imagenes: ["img/A-Check.jpg", "img/A-Check2.jpg"],
    precio: "By Condition",
    tiempo: "By Order to Manufacturer I.A.W: MM,SRM,OHM,CPM, & Aeronautical Regulations",
    rating: 4,
  },
  {
    codigo: "107",
    nombre: "Service B-Check",
    descripcion: "Maintenance B-Check Program",
    imagen: "img/B-Check.jpg",
    imagenes: ["img/B-Check.jpg", "img/B-Check2.jpg"],
    precio: "By Condition",
    tiempo: "By Order to Manufacturer I.A.W: MM,SRM,OHM,CPM, & Aeronautical Regulations",
    rating: 4,
  },
  {
    codigo: "108",
    nombre: "Service C-Check",
    descripcion: "Major Maintenance C-Check",
    imagen: "img/C-Check.jpg",
    imagenes: ["img/C-Check.jpg", "img/C-Check2.jpg"],
    precio: "By Condition",
    tiempo: "By Order to Manufacturer I.A.W: MM,SRM,OHM,CPM, & Aeronautical Regulations",
    rating: 4,
  },
  {
    codigo: "109",
    nombre: "Service D-Check",
    descripcion: "Heavy Maintenance D-Check",
    imagen: "img/D-Check.jpg",
    imagenes: ["img/D-Check.jpg", "img/D-Check2.jpg"],
    precio: "By Condition",
    tiempo: "By Order to Manufacturer I.A.W: MM,SRM,OHM,CPM, & Aeronautical Regulations",
    rating: 4,
  },
  {
    codigo: "110",
    nombre: "Control_Corrotion_Program",
    descripcion: "Corrosion Control Program",
    imagen: "img/corrotion.jpg",
    imagenes: ["img/corrotion.jpg", "img/corrotion2.jpg"],
    precio: "By Condition",
    tiempo: "By Order to Manufacturer I.A.W: MM,SRM,OHM,CPM, & Aeronautical Regulations",
    rating: 4,
  },
  {
    codigo: "111",
    nombre: "Overnight",
    descripcion: "Overnight maintenance services",
    imagen: "img/Overnight.jpg",
    imagenes: ["img/Overnight.jpg", "img/Overnight2.jpg"],
    precio: "By Condition",
    tiempo: "Rutinario  By Order to Manufacturer I.A.W: MM,SRM,OHM,CPM, & Aeronautical Regulations",
    rating: 4,
  },
  {
    codigo: "112",
    nombre: "Equipment and Supplies",
    descripcion: "Aircraft equipment and supplies management",
    imagen: "img/Equipment and Supplies.jpg",
    imagenes: ["img/Equipment and Supplies.jpg", "img/supplies2.jpg"],
    precio: "By Market Prices",
    tiempo: "Por requerimiento",
    rating: 4,
  },
];