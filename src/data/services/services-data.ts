import { Service } from "./service-types";

export const services: Service[] = [
  // ac
  {
    slug: "ac",
    name: "AC Repair & Service",
    type: "standard",
    category: "repair-service",
    description:
      "Professional AC repair and servicing to restore cooling efficiency, airflow and long-term performance.",

    mainImage: "/images/services/main/ac-main.webp",
    subImages: [
      "/images/services/ac/1.webp",
      "/images/services/ac/2.webp",
      "/images/services/ac/3.webp",
    ],

    subServices: [
      {
        title: "All Types of AC Repairs & Services",
        description:
          "Comprehensive repair, servicing, installation, gas refilling, and component replacement solutions for all types of split, window, inverter, and non-inverter air conditioners handled by certified professionals.",
      },
      {
        title: "Foam-Jet AC Service",
        description:
          "Deep cleaning using foam-jet technology to remove dust, dirt and bacteria for better cooling efficiency.",
      },
      {
        title: "General AC Service",
        description:
          "Routine maintenance including filter cleaning, coil check and drainage inspection.",
      },
      {
        title: "Major AC Service",
        description:
          "Comprehensive servicing with deep cleaning, gas pressure check and full performance inspection.",
      },
      {
        title: "AC Installation",
        description:
          "Professional installation of split and window AC units with proper alignment and safety checks.",
      },
      {
        title: "AC Uninstallation",
        description:
          "Safe removal of AC units without wall damage or gas leakage.",
      },
      {
        title: "Gas Charging / Refilling",
        description:
          "Refrigerant refilling to restore cooling performance and efficiency.",
      },
      {
        title: "Cooling Coil Repair",
        description:
          "Repair of damaged coils with anti-rust protection to improve durability.",
      },
      {
        title: "Condenser Repair",
        description:
          "Repair and servicing of condenser unit for optimal heat exchange.",
      },
      {
        title: "PCB Repair (Inverter & Non-Inverter)",
        description:
          "Repair of AC PCB boards to fix electrical and performance issues.",
      },
      {
        title: "Blower Motor Replacement",
        description:
          "Replacement of faulty blower motor to restore proper airflow.",
      },
      {
        title: "Outdoor Fan Motor Replacement",
        description:
          "Repair or replacement of outdoor fan motor for improved cooling.",
      },
      {
        title: "Capacitor Replacement",
        description:
          "Replacement of compressor or fan capacitors to resolve startup issues.",
      },
      {
        title: "Drain Pipe Installation",
        description:
          "Installation or replacement of AC drain pipes for proper water flow.",
      },
      {
        title: "Copper Pipe Extension",
        description:
          "Installation of copper piping with insulation and wiring support.",
      },
      {
        title: "Anti-Rust Treatment",
        description:
          "Protective anti-rust coating for enhanced durability of AC components.",
      },
    ],

    faqs: [
      {
        question: "What AC brands do you service?",
        answer:
          "We repair and service all major AC brands in India, including Voltas, Daikin, LG, Samsung, Hitachi, Blue Star, Carrier, Panasonic, Whirlpool, Godrej, Mitsubishi Electric, and O General.",
      },
      {
        question: "How often should I service my AC?",
        answer:
          "It is recommended to service your AC every 6 months to maintain cooling efficiency and extend its lifespan.",
      },
      {
        question: "Do you provide same-day AC repair?",
        answer:
          "Yes, we offer same-day service depending on technician availability in your area.",
      },
      {
        question: "Do you service all AC brands?",
        answer:
          "Yes, our technicians are trained to repair and service all major AC brands.",
      },
      {
        question: "What are the signs that my AC needs gas refilling?",
        answer:
          "Low cooling, ice formation on coils and unusual noise are common signs that your AC may need gas refilling.",
      },
    ],
  },

  //chimney
  {
    slug: "chimney",
    name: "Chimney Repair",
    type: "standard",
    category: "repair-service",
    description:
      "Expert kitchen chimney cleaning, repair, installation, and maintenance to ensure powerful suction and a smoke-free kitchen.",

    mainImage: "/images/services/main/chimney-main.webp",
    subImages: [
      "/images/services/chimney/1.webp",
      "/images/services/chimney/2.webp",
      "/images/services/chimney/3.webp",
    ],

    subServices: [
      {
        title: "All Types of Chimney Repairs & Services",
        description:
          "Complete kitchen chimney inspection, cleaning, motor repair, installation, uninstallation, and performance restoration services for ducted and ductless models.",
      },
      {
        title: "Chimney Performance Check & Fault Detection",
        description:
          "Complete inspection to identify suction issues, unusual noise, motor faults, or electrical problems. Ideal for chimneys with reduced performance.",
      },
      {
        title: "Routine Chimney Cleaning Service",
        description:
          "Routine cleaning service to remove grease buildup from filters and outer body, ensuring smoother suction and better airflow.",
      },
      {
        title: "Intensive Chimney Deep Cleaning",
        description:
          "Thorough internal cleaning of motor, blower, filters, and ducts to remove stubborn grease deposits and restore optimal performance.",
      },
      {
        title: "Professional Chimney Setup & Installation",
        description:
          "Professional installation with secure wall mounting, proper duct alignment, and safe electrical connections.",
      },
      {
        title: "Safe Chimney Removal Service",
        description:
          "Safe and careful removal of existing chimney units without damaging walls or kitchen fittings.",
      },
    ],

    faqs: [
      {
        question: "How often should I get my chimney cleaned?",
        answer:
          "For regular home cooking, chimney cleaning is recommended every 3–6 months to prevent grease buildup and maintain strong suction.",
      },
      {
        question: "Why is my chimney making noise?",
        answer:
          "Unusual noise may be caused by motor wear, loose components, or heavy grease accumulation. A professional inspection can identify the exact issue.",
      },
      {
        question: "What is included in deep chimney cleaning?",
        answer:
          "Deep cleaning covers internal components like the motor, blower, filters, and duct area to remove stubborn grease and improve airflow.",
      },
      {
        question: "Do you handle both ducted and ductless chimneys?",
        answer:
          "Yes, our technicians are trained to service both ducted and ductless kitchen chimney systems.",
      },
    ],
  },

  //microwave
  {
    slug: "microwave",
    name: "Microwave Repair & Maintenance",
    type: "standard",
    category: "repair-service",
    description:
      "Reliable microwave repair services for heating issues, power failures, and control panel problems.",

    mainImage: "/images/services/main/microwave-main.webp",
    subImages: [
      "/images/services/microwave/1.webp",
      "/images/services/microwave/2.webp",
      "/images/services/microwave/3.webp",
    ],

    subServices: [
      {
        title: "All Types of Microwave Repairs & Services",
        description:
          "End-to-end diagnostic, electrical, heating, and component repair solutions for solo, grill, and convection microwave ovens by trained technicians.",
      },
      {
        title: "Heating Issue Diagnosis & Repair",
        description:
          "Inspection and repair of microwave heating problems caused by faulty magnetron, capacitor, or internal components.",
      },
      {
        title: "Control Panel & Button Repair",
        description:
          "Fixing unresponsive touch panels, display errors, and damaged control boards for smooth operation.",
      },
      {
        title: "Power Supply & Fuse Replacement",
        description:
          "Repair of sudden power failures, blown fuses, wiring issues, and internal electrical faults.",
      },
      {
        title: "Turntable & Motor Repair",
        description:
          "Repair or replacement of faulty turntable motors and rotating mechanisms to ensure even heating.",
      },
    ],

    faqs: [
      {
        question: "Why is my microwave running but not heating?",
        answer:
          "This usually indicates a problem with the magnetron, capacitor, or diode. Our technician will diagnose the exact issue and repair it safely.",
      },
      {
        question: "What brands of microwaves do you repair?",
        answer:
          "We repair all major microwave brands including LG, Samsung, IFB, Whirlpool, Panasonic, Godrej, Bajaj, Haier, Bosch, and Morphy Richards. Whether it’s an LG convection microwave not heating or a Samsung panel issue, we handle all leading Indian and international brands.",
      },
      {
        question: "Is it safe to repair a microwave?",
        answer:
          "Yes. Microwaves contain high-voltage components, so professional repair is recommended to ensure safe and proper handling.",
      },
      {
        question: "Do you repair convection and solo microwaves?",
        answer:
          "Yes, we service solo, grill, and convection microwave ovens of all major brands.",
      },
    ],
  },

  //aircooler
  {
    slug: "air-cooler",
    name: "Air Cooler Repair & Maintenance",
    type: "standard",
    category: "repair-service",
    description:
      "Complete air cooler repair and servicing to restore strong airflow and efficient cooling performance.",

    mainImage: "/images/services/main/air-cooler-main.webp",
    subImages: [
      "/images/services/air-cooler/1.webp",
      "/images/services/air-cooler/2.webp",
      "/images/services/air-cooler/3.webp",
    ],

    subServices: [
      {
        title: "All Types of Air Cooler Repairs & Services",
        description:
          "Complete repair, pump replacement, motor servicing, cooling pad maintenance, wiring repair, and seasonal servicing for desert, tower, and personal air coolers.",
      },
      {
        title: "Cooling Performance Diagnosis",
        description:
          "Complete inspection to identify reduced cooling caused by airflow blockage, pump failure, or internal component issues.",
      },
      {
        title: "Water Pump Repair & Replacement",
        description:
          "Repair or replacement of faulty water pumps to restore proper water circulation and effective cooling.",
      },
      {
        title: "Fan Motor Repair",
        description:
          "Fixing damaged or noisy fan motors to ensure smooth airflow and consistent performance.",
      },
      {
        title: "Cooling Pad Cleaning & Replacement",
        description:
          "Thorough cleaning or replacement of cooling pads to improve airflow and enhance cooling efficiency.",
      },
      {
        title: "Electrical & Wiring Repair",
        description:
          "Inspection and repair of internal wiring, switches, and power supply components for safe operation.",
      },
      {
        title: "Fan Blade & Swing Motor Repair",
        description:
          "Repair of broken fan blades and swing mechanisms to ensure proper air distribution across the room.",
      },
      {
        title: "Water Leakage Fix",
        description:
          "Identifying and repairing water leakage issues from tank cracks, loose connections, or damaged pipes.",
      },
      {
        title: "Pre-Summer Preventive Servicing",
        description:
          "Complete seasonal servicing including internal cleaning, performance check, and component testing before peak summer usage.",
      },
    ],

    faqs: [
      {
        question: "Why is my air cooler not cooling properly?",
        answer:
          "Poor cooling may be due to clogged cooling pads, a faulty pump, or reduced airflow. A professional inspection can identify and fix the issue quickly.",
      },
      {
        question: "What brands of air coolers do you service?",
        answer:
          "We repair and service major air cooler brands including Symphony, Bajaj, Crompton, Havells, Kenstar, Usha, Orient, Maharaja Whiteline, Voltas, and Blue Star. Whether it’s a Symphony cooler with pump issues or a Bajaj cooler with motor problems, we handle all leading Indian brands.",
      },
      {
        question: "How often should air coolers be serviced?",
        answer:
          "Air coolers should ideally be serviced before every summer season to ensure proper airflow, clean pads, and efficient cooling.",
      },
      {
        question: "Do you repair both desert and personal coolers?",
        answer:
          "Yes, we service desert coolers, personal coolers, tower coolers, and window air coolers.",
      },
    ],
  },

  //geyser
  {
    slug: "geyser",
    name: "Geyser Repair & Maintenance",
    type: "standard",
    category: "repair-service",
    description:
      "Professional geyser repair and maintenance services to resolve heating, leakage, and electrical issues safely and efficiently.",

    mainImage: "/images/services/main/geyser-main.webp",
    subImages: [
      "/images/services/geyser/1.webp",
      "/images/services/geyser/2.webp",
      "/images/services/geyser/3.webp",
    ],

    subServices: [
      {
        title: "All Types of Geyser Repairs & Services",
        description:
          "Professional heating element repair, thermostat servicing, leakage fixing, installation, and preventive maintenance for electric and storage water heaters.",
      },
      {
        title: "Heating Element Repair & Replacement",
        description:
          "Repair or replacement of faulty heating elements to restore proper hot water performance.",
      },
      {
        title: "Thermostat Repair",
        description:
          "Fixing malfunctioning thermostats to ensure accurate temperature control and safety.",
      },
      {
        title: "Water Leakage Repair",
        description:
          "Identification and repair of leakage from tank cracks, valves, or pipe connections.",
      },
      {
        title: "Tank Cleaning & Descaling",
        description:
          "Internal tank cleaning to remove sediment buildup and improve heating efficiency.",
      },
      {
        title: "Electrical & Wiring Repair",
        description:
          "Inspection and repair of damaged wiring, switches, and power supply components.",
      },
      {
        title: "Pressure Valve Replacement",
        description:
          "Repair or replacement of faulty safety and pressure release valves to prevent overheating risks.",
      },
      {
        title: "Geyser Installation",
        description:
          "Professional wall mounting and secure installation with proper plumbing and electrical connections.",
      },
      {
        title: "Preventive Maintenance Service",
        description:
          "Complete safety and performance check to ensure long-term reliability before peak winter usage.",
      },
    ],

    faqs: [
      {
        question: "Why is my geyser not heating water?",
        answer:
          "This is usually caused by a faulty heating element, thermostat issue, or electrical problem. A professional inspection can quickly identify and resolve the issue.",
      },
      {
        question: "What brands of geysers do you service?",
        answer:
          "We repair and service major geyser brands including Bajaj, Havells, Racold, AO Smith, V-Guard, Crompton, Usha, Orient, Venus, and Kenstar. Whether it’s a Racold heating issue or a Bajaj leakage problem, our technicians handle all leading Indian brands.",
      },
      {
        question: "Is geyser repair safe?",
        answer:
          "Yes, when handled by trained professionals. Geysers involve electricity and water, so expert servicing ensures safety and proper functioning.",
      },
      {
        question: "How often should a geyser be serviced?",
        answer:
          "It is recommended to service your geyser once a year to prevent sediment buildup and ensure efficient heating.",
      },
    ],
  },

  //refriderator
  {
    slug: "refrigerator",
    name: "Refrigerator Repair & Maintenance",
    type: "standard",
    category: "repair-service",
    description:
      "Professional refrigerator repair services to resolve cooling, gas leakage, and compressor-related issues efficiently.",

    mainImage: "/images/services/main/fridge-main.webp",
    subImages: [
      "/images/services/refrigerator/1.webp",
      "/images/services/refrigerator/2.webp",
      "/images/services/refrigerator/3.webp",
    ],

    subServices: [
      {
        title: "All Types of Refrigerator Repairs & Services",
        description:
          "Comprehensive cooling issue diagnosis, compressor repair, gas refilling, sensor repair, and preventive maintenance for single-door, double-door, inverter, and side-by-side refrigerators.",
      },
      {
        title: "Cooling Issue Diagnosis",
        description:
          "Complete inspection to identify cooling loss caused by thermostat faults, blocked vents, or internal component failure.",
      },
      {
        title: "Compressor Repair & Replacement",
        description:
          "Repair or replacement of faulty compressors to restore proper cooling performance.",
      },
      {
        title: "Gas Refilling & Leak Repair",
        description:
          "Detection and repair of refrigerant gas leaks followed by safe and accurate gas refilling.",
      },
      {
        title: "Thermostat & Sensor Repair",
        description:
          "Fixing temperature control issues caused by damaged thermostats or sensors.",
      },
      {
        title: "Defrost System Repair",
        description:
          "Repair of defrost heater, timer, and related components to prevent ice buildup.",
      },
      {
        title: "Door Seal Replacement",
        description:
          "Replacement of worn-out door gaskets to maintain cooling efficiency and prevent air leakage.",
      },
      {
        title: "Water Leakage Repair",
        description:
          "Fixing clogged drain pipes and internal blockages causing water leakage inside or beneath the refrigerator.",
      },
      {
        title: "Preventive Maintenance Service",
        description:
          "Complete performance check, internal cleaning, and safety inspection for long-term reliability.",
      },
    ],

    faqs: [
      {
        question: "Why is my refrigerator not cooling properly?",
        answer:
          "Cooling problems may be caused by gas leakage, compressor failure, thermostat issues, or blocked airflow. A technician can diagnose and fix the issue accurately.",
      },
      {
        question: "What refrigerator brands do you service?",
        answer:
          "We repair all major refrigerator brands including LG, Samsung, Whirlpool, Godrej, Haier, Bosch, IFB, Panasonic, Voltas Beko, and Hitachi. Whether it’s an LG double-door cooling issue or a Whirlpool compressor problem, we handle all leading Indian brands.",
      },
      {
        question: "Do you repair single-door and double-door refrigerators?",
        answer:
          "Yes, we service single-door, double-door, side-by-side, and inverter refrigerators.",
      },
      {
        question: "How often should a refrigerator be serviced?",
        answer:
          "Basic maintenance and inspection are recommended once a year to ensure efficient cooling and prevent major breakdowns.",
      },
    ],
  },

  //washing-machine
  {
    slug: "washing-machine",
    name: "Washing Machine Repair & Maintenance",
    type: "standard",
    category: "repair-service",
    description:
      "Reliable washing machine repair services for front-load and top-load models, covering performance, drainage, and electrical issues.",

    mainImage: "/images/services/main/washing-machine-main.webp",
    subImages: [
      "/images/services/washing-machine/1.webp",
      "/images/services/washing-machine/2.webp",
      "/images/services/washing-machine/3.webp",
    ],

    subServices: [
      {
        title: "All Types of Washing Machine Repairs & Services",
        description:
          "Complete repair and maintenance services including drum issues, motor faults, drainage problems, PCB repair, and preventive servicing for front-load, top-load, and semi-automatic machines.",
      },
      {
        title: "Drum & Spin Issue Repair",
        description:
          "Diagnosis and repair of drum rotation problems, excessive vibration, or spin cycle failure.",
      },
      {
        title: "Water Drainage Repair",
        description:
          "Fixing clogged drain pumps, blocked filters, and improper water discharge issues.",
      },
      {
        title: "Motor Repair & Replacement",
        description:
          "Repair or replacement of faulty washing machine motors affecting wash performance.",
      },
      {
        title: "Control Panel & PCB Repair",
        description:
          "Fixing unresponsive buttons, display errors, and circuit board malfunctions.",
      },
      {
        title: "Water Inlet Valve Repair",
        description:
          "Repairing slow or no water filling problems caused by faulty inlet valves.",
      },
      {
        title: "Door Lock & Lid Switch Repair",
        description:
          "Replacement or repair of defective door locks and lid switches for safe operation.",
      },
      {
        title: "Leakage Detection & Repair",
        description:
          "Identifying and fixing water leakage from hoses, seals, or internal connections.",
      },
      {
        title: "Preventive Maintenance Service",
        description:
          "Complete performance check, internal cleaning, and component inspection for long-term reliability.",
      },
    ],

    faqs: [
      {
        question: "Why is my washing machine not spinning properly?",
        answer:
          "Spin issues may be caused by motor faults, belt problems, overloaded drum, or control board malfunction. A technician can diagnose and fix the issue efficiently.",
      },
      {
        question: "What washing machine brands do you service?",
        answer:
          "We repair all major brands including LG, Samsung, Whirlpool, IFB, Bosch, Haier, Godrej, Panasonic, Onida, and Voltas Beko. Whether it’s an IFB front-load drum issue or a Samsung top-load drainage problem, we service all leading Indian brands.",
      },
      {
        question: "Do you repair both front-load and top-load machines?",
        answer:
          "Yes, we service front-load, top-load, semi-automatic, and fully automatic washing machines.",
      },
      {
        question: "How often should a washing machine be serviced?",
        answer:
          "Annual servicing is recommended to prevent drum scaling, drainage blockages, and motor wear.",
      },
    ],
  },

  //water-purifier
  {
    slug: "water-purifier",
    name: "Water Purifier Repair & Maintenance",
    type: "standard",
    category: "repair-service",
    description:
      "Complete RO and water purifier repair and maintenance services for safe and clean drinking water.",

    mainImage: "/images/services/main/water-purifier-main.webp",
    subImages: [
      "/images/services/water-purifier/1.webp",
      "/images/services/water-purifier/2.webp",
      "/images/services/water-purifier/3.webp",
    ],

    subServices: [
      {
        title: "All Types of Water Purifier Repairs & Services",
        description:
          "Comprehensive RO and water purifier repair including filter replacement, pump repair, leakage fixing, TDS adjustment, and annual maintenance services.",
      },
      {
        title: "RO Filter Replacement",
        description:
          "Replacement of sediment, carbon, and RO membranes to ensure pure and safe drinking water.",
      },
      {
        title: "Water Leakage Repair",
        description:
          "Detection and repair of internal or external water leakage from pipes, connectors, or filter housing.",
      },
      {
        title: "Low Water Flow Fix",
        description:
          "Diagnosis and repair of low water output caused by clogged filters or pump malfunction.",
      },
      {
        title: "Pump & Motor Repair",
        description:
          "Repair or replacement of faulty booster pumps and internal motors.",
      },
      {
        title: "UV & Electrical Repair",
        description:
          "Fixing UV lamp issues, power supply faults, and internal wiring problems.",
      },
      {
        title: "TDS & Water Quality Check",
        description:
          "Water quality testing and adjustment to ensure safe TDS levels.",
      },
      {
        title: "Annual Maintenance Service",
        description:
          "Complete internal cleaning, filter inspection, and performance testing for long-term reliability.",
      },
      {
        title: "New RO Installation & Setup",
        description:
          "Professional wall mounting and safe installation with proper inlet and outlet pipe connections.",
      },
    ],

    faqs: [
      {
        question: "Why is my water purifier not giving water?",
        answer:
          "This may be due to clogged filters, pump failure, or low water pressure. A technician can inspect and fix the issue quickly.",
      },
      {
        question: "What water purifier brands do you service?",
        answer:
          "We repair major brands including Kent, Aquaguard, Livpure, Pureit, AO Smith, Blue Star, Havells, Tata Swach, Faber, and V-Guard. Whether it’s a Kent RO filter replacement or an Aquaguard pump issue, we handle all leading Indian brands.",
      },
      {
        question: "How often should RO filters be replaced?",
        answer:
          "RO filters typically need replacement every 6–12 months depending on water quality and usage.",
      },
      {
        question: "Do you provide TDS testing?",
        answer:
          "Yes, we perform water quality checks and adjust TDS levels to ensure safe drinking water.",
      },
    ],
  },

  //tv
  {
    slug: "tv",
    name: "LED & Smart TV Repair Services",
    type: "standard",
    category: "repair-service",
    description:
      "Professional repair services for LED, LCD, and Smart TVs covering display, sound, and motherboard issues.",

    mainImage: "/images/services/main/tv-main.webp",
    subImages: [
      "/images/services/tv/1.webp",
      "/images/services/tv/2.webp",
      "/images/services/tv/3.webp",
    ],

    subServices: [
      {
        title: "All Types of LED & Smart TV Repairs & Services",
        description:
          "Complete display, motherboard, power supply, software troubleshooting, and installation services for LED, LCD, OLED, and Smart TVs.",
      },
      {
        title: "Screen & Display Repair",
        description:
          "Diagnosis and repair of display issues such as no picture, lines on screen, flickering, or dim backlight.",
      },
      {
        title: "Motherboard & PCB Repair",
        description:
          "Repair or replacement of faulty mainboards and internal circuit components.",
      },
      {
        title: "Power Supply Repair",
        description:
          "Fixing power board failures, sudden shutdown issues, and no-power problems.",
      },
      {
        title: "Sound & Speaker Repair",
        description:
          "Repairing distorted sound, no audio output, or internal speaker malfunctions.",
      },
      {
        title: "HDMI & Port Repair",
        description:
          "Fixing damaged HDMI ports, USB ports, and connectivity issues.",
      },
      {
        title: "Backlight Replacement",
        description:
          "Replacement of faulty LED backlight strips causing dark or partially visible screens.",
      },
      {
        title: "Wall Mount Installation",
        description:
          "Professional TV wall mounting with secure bracket installation and proper alignment.",
      },
      {
        title: "Smart TV Software Troubleshooting",
        description:
          "Resolving software glitches, app crashes, network connectivity, and system update issues.",
      },
    ],

    faqs: [
      {
        question: "Why is my TV screen blank but sound is working?",
        answer:
          "This is commonly caused by a backlight or display panel issue. A technician can inspect and replace the faulty component safely.",
      },
      {
        question: "What TV brands do you service?",
        answer:
          "We repair all major brands including LG, Samsung, Sony, Mi (Xiaomi), OnePlus, Panasonic, TCL, Vu, Philips, and Onida. Whether it’s an LG LED backlight issue or a Samsung Smart TV motherboard fault, we handle all leading Indian and international brands.",
      },
      {
        question: "Do you repair Smart TVs?",
        answer:
          "Yes, we service LED, LCD, OLED, and Smart TVs, including software and hardware issues.",
      },
      {
        question: "Can a cracked TV screen be repaired?",
        answer:
          "Screen panel replacement may be possible depending on the model. Our technician will inspect and suggest the best solution.",
      },
    ],
  },

  //end of repair services
  //home services

  //home-renovation
  {
    slug: "home-renovation",
    name: "Home Renovation",
    type: "custom",
    category: "home-service",
    description:
      "Comprehensive home renovation services to upgrade, restore, and transform your living spaces with quality craftsmanship.",

    mainImage: "/images/services/main/home-renovation-main.webp",
    subImages: [
      "/images/services/renovation/1.webp",
      "/images/services/renovation/2.webp",
      "/images/services/renovation/3.webp",
    ],
  },
  //interior-design
  {
    slug: "interior-design",
    name: "Interior Design",
    type: "custom",
    category: "home-service",
    description:
      "Complete interior design solutions for modern and functional homes.",

    mainImage: "/images/services/main/interior-design-main.webp",
    subImages: [
      "/images/services/interior/1.webp",
      "/images/services/interior/2.webp",
      "/images/services/interior/3.webp",
    ],
  },

  //plumber
  {
    slug: "plumber",
    name: "Professional Plumbing & Pipe Services",
    type: "standard",
    category: "home-service",
    description:
      "Reliable plumbing solutions for leak repairs, bathroom fittings, pipe installations, and regular maintenance services.",

    mainImage: "/images/services/main/plumber-main.webp",
    subImages: [
      "/images/services/plumber/1.webp",
      "/images/services/plumber/2.webp",
      "/images/services/plumber/3.webp",
    ],

    subServices: [
      {
        title: "All Types of Plumbing & Pipe Services",
        description:
          "End-to-end plumbing solutions including leak repairs, pipe installations, bathroom fittings, blockage removal, and water pressure correction services.",
      },
      {
        title: "Leak Detection & Repair",
        description:
          "Identification and repair of pipe leaks, tap leaks, and concealed water leakage issues.",
      },
      {
        title: "Tap & Faucet Installation",
        description:
          "Installation and replacement of kitchen and bathroom taps, mixers, and fittings.",
      },
      {
        title: "Drain Blockage Removal",
        description:
          "Clearing clogged sinks, bathroom drains, and pipelines for smooth water flow.",
      },
      {
        title: "Bathroom Fittings Installation",
        description:
          "Installation of showers, health faucets, wash basins, and related bathroom fixtures.",
      },
      {
        title: "Water Tank Cleaning & Repair",
        description:
          "Cleaning and minor repair of overhead and underground water storage tanks.",
      },
      {
        title: "Pipe Installation & Replacement",
        description:
          "Installation of new pipelines and replacement of damaged or rusted pipes.",
      },
      {
        title: "Toilet & Flush Repair",
        description:
          "Repair of flush tanks, leakage issues, and toilet seat installations.",
      },
      {
        title: "Water Pressure Adjustment",
        description:
          "Fixing low or high water pressure problems to ensure proper plumbing performance.",
      },
    ],

    faqs: [
      {
        question: "How do I know if I have a hidden water leak?",
        answer:
          "Signs include damp walls, increased water bills, mold smell, or water stains. A professional inspection can accurately detect concealed leaks.",
      },
      {
        question: "What plumbing brands do you work with?",
        answer:
          "We work with major plumbing and sanitary brands including Jaquar, Hindware, Cera, Parryware, Kohler, Supreme Pipes, Astral Pipes, Prince Pipes, and Ashirvad. Whether it’s a Jaquar mixer issue or an Astral pipe replacement, we handle all leading Indian brands.",
      },
      {
        question: "Do you handle emergency plumbing repairs?",
        answer:
          "Yes, we provide quick response for urgent leak repairs and blockage issues.",
      },
      {
        question: "Can you install new bathroom fittings?",
        answer:
          "Yes, we professionally install taps, showers, wash basins, flush systems, and other plumbing fixtures.",
      },
    ],
  },

  //electrical

  {
    slug: "electrical",
    name: "Electrical Repair & Installation Services",
    type: "standard",
    category: "home-service",
    description:
      "Professional electrical services for wiring, installations, repairs, and safety inspections for homes and offices.",

    mainImage: "/images/services/main/electrical-main.webp",
    subImages: [
      "/images/services/electrical/1.webp",
      "/images/services/electrical/2.webp",
      "/images/services/electrical/3.webp",
    ],

    subServices: [
      {
        title: "All Types of Electrical Repairs & Installations",
        description:
          "Comprehensive electrical services including wiring, switch repair, lighting installation, MCB replacement, inverter setup, and safety inspections for residential and commercial properties.",
      },
      {
        title: "Switch & Socket Repair",
        description:
          "Repair and replacement of faulty switches, sockets, and power outlets.",
      },
      {
        title: "Fan Installation & Repair",
        description:
          "Ceiling fan installation, regulator repair, and speed control issues.",
      },
      {
        title: "Light Installation",
        description:
          "Installation of LED lights, tube lights, chandeliers, and decorative lighting.",
      },
      {
        title: "Wiring & Rewiring Services",
        description:
          "Complete house wiring, rewiring of old connections, and concealed wiring solutions.",
      },
      {
        title: "MCB & Fuse Repair",
        description:
          "Repair and replacement of MCBs, fuses, and distribution boards.",
      },
      {
        title: "Inverter & UPS Installation",
        description:
          "Installation and connection of home inverters and UPS systems.",
      },
      {
        title: "Doorbell & Appliance Wiring",
        description:
          "Installation and repair of doorbells and safe appliance electrical connections.",
      },
      {
        title: "Electrical Safety Inspection",
        description:
          "Inspection of home electrical systems to prevent short circuits and fire hazards.",
      },
    ],

    faqs: [
      {
        question: "Why does my MCB trip frequently?",
        answer:
          "Frequent tripping can be caused by overloaded circuits, short circuits, or faulty appliances. A professional electrician can diagnose and fix the issue safely.",
      },
      {
        question: "What electrical brands do you work with?",
        answer:
          "We work with leading brands including Havells, Anchor by Panasonic, Polycab, Finolex, RR Kabel, Schneider Electric, Legrand, Crompton, and Bajaj Electricals. Whether it’s Havells switches or Polycab wiring, we handle all major Indian electrical brands.",
      },
      {
        question: "Do you provide complete house wiring services?",
        answer:
          "Yes, we provide new wiring, rewiring, concealed wiring, and electrical upgrades for homes and offices.",
      },
      {
        question: "Is it safe to repair electrical issues myself?",
        answer:
          "Electrical repairs can be dangerous. It is always recommended to hire a trained professional to ensure safety and proper installation.",
      },
    ],
  },

  //paint

  {
    slug: "paint",
    name: "Painting Services",
    type: "standard",
    category: "home-service",
    description:
      "Professional interior and exterior painting services with smooth finish, premium materials, and long-lasting results.",

    mainImage: "/images/services/main/paint-main.webp",
    subImages: [
      "/images/services/paint/1.webp",
      "/images/services/paint/2.webp",
      "/images/services/paint/3.webp",
    ],

    subServices: [
      {
        title: "Interior Wall Painting",
        description:
          "Smooth and clean interior wall painting with premium emulsions and modern color finishes.",
      },
      {
        title: "Exterior House Painting",
        description:
          "Weather-resistant exterior painting for long-lasting protection and vibrant appearance.",
      },
      {
        title: "Wall Putty & Surface Preparation",
        description:
          "Proper surface leveling, crack filling, and primer application before painting.",
      },
      {
        title: "Texture & Designer Painting",
        description:
          "Decorative wall textures and custom designer finishes for stylish interiors.",
      },
      {
        title: "Ceiling Painting",
        description:
          "Professional ceiling repainting with clean edges and uniform coverage.",
      },
      {
        title: "Waterproof Coating",
        description:
          "Application of waterproof and damp-proof coatings to prevent leakage and moisture damage.",
      },
      {
        title: "Wood & Metal Painting",
        description:
          "Enamel and protective coating for doors, windows, grills, and railings.",
      },
      {
        title: "Repainting & Renovation Painting",
        description:
          "Complete repainting services for old homes, rental properties, and renovation projects.",
      },
    ],

    faqs: [
      {
        question: "How long does home painting take?",
        answer:
          "Interior painting typically takes 2–5 days depending on area size and surface condition. Larger or exterior projects may take longer.",
      },
      {
        question: "Which paint brands do you use?",
        answer:
          "We work with leading Indian paint brands including Asian Paints, Berger Paints, Kansai Nerolac, Indigo Paints, Dulux, and Nippon Paint. Customers can choose their preferred brand and finish type.",
      },
      {
        question: "Do you provide color consultation?",
        answer:
          "Yes, we assist in selecting the right shades, finishes, and combinations to match your home interior.",
      },
      {
        question: "Is surface preparation included in the service?",
        answer:
          "Yes, wall putty, crack filling, sanding, and primer application are included for a smooth and durable finish.",
      },
    ],
  },

  //carpeneter
  {
    slug: "carpenter",
    name: "Carpenter & Woodwork Services",
    type: "standard",
    category: "home-service",
    description:
      "Professional carpentry services for furniture repair, custom woodwork, and installations with precision finishing.",

    mainImage: "/images/services/main/carpenter-main.webp",
    subImages: [
      "/images/services/carpenter/1.webp",
      "/images/services/carpenter/2.webp",
      "/images/services/carpenter/3.webp",
    ],

    subServices: [
      {
        title: "All Types of Carpentry & Woodwork Services",
        description:
          "Professional furniture repair, custom woodwork, modular installations, polishing, and structural wood repair services with precision craftsmanship.",
      },
      {
        title: "Furniture Repair",
        description: "Repair of beds, sofas, tables, and wooden furniture.",
      },
      {
        title: "Door Installation & Repair",
        description: "Wooden door fitting, hinge repair, and alignment.",
      },
      {
        title: "Modular Kitchen Woodwork",
        description: "Cabinet adjustments, shutter repair, and installation.",
      },
      {
        title: "Wardrobe Installation",
        description: "Assembly and fitting of new wardrobes and closets.",
      },
      {
        title: "Custom Shelving",
        description: "Wall-mounted wooden shelves and storage units.",
      },
      {
        title: "Wood Polishing & Finishing",
        description: "Surface polishing and protective coating for furniture.",
      },
      {
        title: "Window Frame Repair",
        description: "Repair and replacement of damaged wooden window frames.",
      },
    ],

    faqs: [
      {
        question: "What brands of modular fittings do you work with?",
        answer:
          "We work with brands like Greenply, CenturyPly, Merino Laminates, Hafele, Hettich, Ebco, and Godrej Interio hardware fittings.",
      },
      {
        question: "Do you provide custom furniture?",
        answer:
          "Yes, we provide custom-made wooden furniture as per size and design requirements.",
      },
    ],
  },

  //solar
  {
    slug: "solar-installation",
    name: "Solar Panel Installation Services",
    type: "standard",
    category: "home-service",
    description:
      "Complete rooftop solar panel installation and maintenance for energy-efficient homes and businesses.",

    mainImage: "/images/services/main/solar-main.webp",
    subImages: [
      "/images/services/solar/1.webp",
      "/images/services/solar/2.webp",
      "/images/services/solar/3.webp",
      "/images/services/solar/4.webp",
    ],

    subServices: [
      {
        title: "Rooftop Solar Installation",
        description: "Complete rooftop solar panel setup.",
      },
      {
        title: "On-Grid Solar Systems",
        description: "Grid-connected solar power systems.",
      },
      {
        title: "Off-Grid Solar Systems",
        description: "Battery-based independent solar systems.",
      },
      {
        title: "Solar Inverter Installation",
        description: "Installation of solar inverters and wiring.",
      },
      {
        title: "Solar Panel Cleaning",
        description: "Maintenance and cleaning for maximum efficiency.",
      },
      {
        title: "Battery Installation",
        description: "Solar battery setup and replacement.",
      },
      {
        title: "Solar System Inspection",
        description: "Performance testing and safety inspection.",
      },
    ],

    faqs: [
      {
        question: "Which solar brands do you install?",
        answer:
          "We install panels and inverters from Tata Power Solar, Loom Solar, Vikram Solar, Waaree, Luminous, Microtek, and Sukam.",
      },
      {
        question: "Is solar suitable for homes?",
        answer:
          "Yes, rooftop solar systems reduce electricity bills and provide long-term savings.",
      },
    ],
  },

  //flooring
  {
    slug: "flooring",
    name: "Flooring Installation Services",
    type: "standard",
    category: "home-service",
    description:
      "Professional flooring installation services including tiles, marble, wooden, and vinyl flooring.",

    mainImage: "/images/services/main/flooring-main.webp",
    subImages: [
      "/images/services/flooring/1.webp",
      "/images/services/flooring/2.webp",
      "/images/services/flooring/3.webp",
    ],

    subServices: [
      {
        title: "Epoxy Flooring",
        description:
          "Durable, seamless epoxy floor coating solutions for residential and commercial spaces.",
      },
      {
        title: "Marble & Granite Flooring",
        description: "Premium stone flooring installation.",
      },
      {
        title: "Wooden Flooring",
        description: "Engineered and laminate wooden floor setup.",
      },
      {
        title: "Vinyl Flooring",
        description: "Durable and water-resistant vinyl flooring.",
      },
      {
        title: "Floor Repair",
        description: "Replacement of cracked or damaged tiles.",
      },
      {
        title: "Floor Polishing",
        description: "Marble and granite polishing services.",
      },
      {
        title: "Waterproof Base Treatment",
        description: "Moisture-proof flooring base preparation.",
      },
    ],

    faqs: [
      {
        question: "Which flooring brands do you work with?",
        answer:
          "We install flooring from Kajaria Tiles, Somany, Nitco, Johnson Tiles, Asian Granito, Pergo, Greenlam, and Action Tesa.",
      },
      {
        question: "How long does flooring installation take?",
        answer:
          "Most residential flooring projects take 2–5 days depending on area size and material.",
      },
    ],
  },

  //gypsum
  {
    slug: "gypsum",
    name: "Gypsum Ceiling & Partition Services",
    type: "standard",
    category: "home-service",
    description:
      "Professional gypsum ceiling and partition installation services for modern, stylish, and durable interiors.",

    mainImage: "/images/services/main/gypsum-main.webp",
    subImages: [
      "/images/services/gypsum/1.webp",
      "/images/services/gypsum/2.webp",
      "/images/services/gypsum/3.webp",
      "/images/services/gypsum/4.webp",
      "/images/services/gypsum/5.webp",
    ],

    subServices: [
      {
        title: "All Types of Gypsum Ceiling & Partition Services",
        description:
          "Complete gypsum false ceiling installation, wall partition setup, lighting integration, crack repair, and custom designer ceiling solutions.",
      },
      {
        title: "False Ceiling Installation",
        description:
          "Modern gypsum false ceiling installation with clean finishing and lighting provisions.",
      },
      {
        title: "POP & Gypsum Board Ceiling",
        description: "Durable and smooth gypsum board and POP ceiling designs.",
      },
      {
        title: "LED Cove Lighting Setup",
        description:
          "Integrated LED strip lighting within gypsum ceiling designs.",
      },
      {
        title: "Gypsum Wall Partitions",
        description:
          "Lightweight and strong gypsum partitions for room division and office spaces.",
      },
      {
        title: "Ceiling Repair & Crack Fixing",
        description:
          "Repair of damaged gypsum boards, cracks, and sagging ceilings.",
      },
      {
        title: "Designer Ceiling Patterns",
        description: "Custom multi-layer and decorative ceiling designs.",
      },
      {
        title: "Soundproof Gypsum Panels",
        description:
          "Acoustic gypsum panels for noise reduction and better insulation.",
      },
    ],

    faqs: [
      {
        question: "Which gypsum brands do you use?",
        answer:
          "We work with leading brands including Saint-Gobain Gyproc, USG Boral, Shera, Armstrong, and Everest Industries.",
      },
      {
        question: "How long does gypsum ceiling installation take?",
        answer:
          "Most residential gypsum ceiling projects take 2–4 days depending on area size and design complexity.",
      },
      {
        question: "Is gypsum ceiling durable?",
        answer:
          "Yes, gypsum ceilings are durable, fire-resistant, lightweight, and ideal for modern interior designs.",
      },
      {
        question: "Can lights be installed inside gypsum ceiling?",
        answer:
          "Yes, we provide proper electrical cutouts and LED integration during installation.",
      },
    ],
  },

  {
    slug: "/",
    name: "More Services Coming soon",
    type: "standard",
    category: "home-service",
    description:
      "Comprehensive home renovation services to upgrade, restore, and transform your living spaces with quality craftsmanship.",

    mainImage: "/images/services/main/coming-soon.webp",
    subImages: [],
  },
];
