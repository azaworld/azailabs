export const slides = [
  { 
    id: "intro",   
    src: "/slides/slide01_intro.png",   
    title: "AZAI Labs", 
    ratio: "square" 
  },
  { 
    id: "qa",      
    src: "/slides/slide02_qa_agent.png", 
    title: "QA Agent", 
    ratio: "square" 
  },
  { 
    id: "daktarai",
    src: "/slides/slide03_daktarai.png", 
    title: "DaktarAI", 
    ratio: "square" 
  },
  { 
    id: "agriai",  
    src: "/slides/slide04_agriai.png",   
    title: "AgriAI", 
    ratio: "square" 
  },
  { 
    id: "services",
    src: "/slides/slide05_services.png", 
    title: "Services", 
    ratio: "square" 
  },
  { 
    id: "cta",     
    src: "/slides/slide06_cta.png",      
    title: "Build with agents", 
    ratio: "square" 
  }
];

export function getSlide(id: string) {
  return slides.find(slide => slide.id === id);
}

export function getAllSlides() {
  return slides;
}
