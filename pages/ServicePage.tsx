import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Phone, ChevronDown, ArrowRight, Mail } from 'lucide-react';
import { Home, Building2, Recycle, Trash, HardHat, Package } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface GalleryImage {
  url: string;
  alt: string;
  caption: string;
}

interface ServiceDetail {
  title: string;
  icon: React.ElementType;
  description: string;
  longDescription: string;
  features: { title: string; description: string }[];
  process: { step: string; detail: string }[];
  image: string;
  secondaryImage: string;
  faqs: FAQ[];
  gallery: GalleryImage[];
  relatedServices: string[];
  stats: { value: string; label: string }[];
  testimonial: { text: string; name: string; location: string };
}

const serviceDetails: Record<string, ServiceDetail> = {
  'donation-services': {
    title: 'Donation Services',
    icon: Home,
    description: 'We accept and manage donated items with a focus on reuse and community benefit.',
    longDescription: 'Our donation services prioritize giving your unwanted items a second life. We carefully evaluate each item for its potential to benefit the community through donation to local charities, non-profits, and families in need. Our team handles the entire process from pickup to delivery, ensuring your donations make the maximum positive impact. With partnerships across the Denver Metro area, we connect your items with organizations that need them most.',
    features: [
      { title: 'Free Pickup Scheduling', description: 'Convenient scheduling for qualifying donations with same-day and next-day options available.' },
      { title: 'Donation Evaluation', description: 'Every item is carefully evaluated for its potential to benefit the community through reuse.' },
      { title: 'Charity Partnerships', description: 'Direct partnerships with over 20 local charities and non-profit organizations.' },
      { title: 'Tax Documentation', description: 'Tax-deductible donation receipts provided for all qualifying donations.' },
      { title: 'Professional Handling', description: 'Items are carefully handled and transported to ensure they arrive in perfect condition.' },
      { title: 'Community Tracking', description: 'We provide updates on where your donations end up and the impact they make.' }
    ],
    process: [
      { step: 'Contact Us', detail: 'Reach out with details and photos of items you would like to donate.' },
      { step: 'Evaluation', detail: 'Our team evaluates donation eligibility based on condition and community need.' },
      { step: 'Schedule Pickup', detail: 'Choose a convenient pickup window — same-day and next-day slots available.' },
      { step: 'Collection', detail: 'Our professional team arrives, carefully loads and transports your items.' },
      { step: 'Distribution', detail: 'Donations are delivered to partner organizations and families in need.' },
      { step: 'Confirmation', detail: 'Receive documentation and confirmation of your donation\'s impact.' }
    ],
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop&q=80',
    faqs: [
      { question: 'What items do you accept for donation?', answer: 'We accept furniture, clothing, household goods, electronics in working condition, appliances, sporting goods, books, and more. Items should be in usable condition. Contact us if you are unsure about a specific item.' },
      { question: 'Is there a fee for donation pickup?', answer: 'Pickup is free for qualifying donations that meet our condition standards. For mixed loads with both donation and disposal items, we provide a combined quote.' },
      { question: 'Do I receive a tax receipt?', answer: 'Yes, we provide tax-deductible donation receipts for all qualifying items. Receipts are emailed within 48 hours of pickup.' },
      { question: 'Where do the donated items go?', answer: 'We partner with over 20 local charities, shelters, and community organizations across the Denver Metro area. Items are matched to organizations based on current need.' },
      { question: 'How quickly can you pick up donations?', answer: 'We offer same-day and next-day pickup for most Denver Metro locations. Standard scheduling is within 2-3 business days.' }
    ],
    gallery: [
       
      { url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop&q=80', alt: 'Volunteers organizing donated items', caption: 'Organizing donations for local families' },
      { url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop&q=80', alt: 'Hands holding a donation box', caption: 'Every donation makes a difference' }
    ],
    relatedServices: ['furniture-donation', 'clean-out-services', 'commercial-services'],
    stats: [
      { value: '10,000+', label: 'Items Donated' },
      { value: '20+', label: 'Charity Partners' },
      { value: '98%', label: 'Client Satisfaction' }
    ],
    testimonial: { text: 'Echo Swift made donating our household items incredibly easy. They picked everything up, handled it with care, and even sent us photos of where our things ended up. Amazing service!', name: 'Sarah Mitchell', location: 'Denver, CO' }
  },
  'furniture-donation': {
    title: 'Furniture Donation',
    icon: Package,
    description: 'Household and office furniture in good condition prioritized for donation and reuse.',
    longDescription: 'Give your quality furniture a new home through our specialized furniture donation service. We accept household and office furniture in good condition and connect them with families, non-profits, and community organizations that need them. From sofas and dining sets to office desks and chairs, we ensure your furniture continues to serve a purpose rather than ending up in a landfill.',
    features: [
      { title: 'Household Furniture', description: 'We accept sofas, beds, tables, chairs, dressers, bookshelves, and more in good condition.' },
      { title: 'Office Furniture', description: 'Desks, conference tables, office chairs, filing cabinets, and cubicle systems accepted.' },
      { title: 'Quality Assessment', description: 'Each piece is assessed for structural integrity and condition to ensure donation eligibility.' },
      { title: 'Heavy Lifting Included', description: 'Our trained team handles all heavy lifting, disassembly, and careful loading.' },
      { title: 'Verified Recipients', description: 'Furniture is delivered to verified families, shelters, and organizations in genuine need.' },
      { title: 'Tax Documentation', description: 'Detailed donation receipts with item descriptions and fair market value estimates.' }
    ],
    process: [
      { step: 'Submit Details', detail: 'Send us photos and descriptions of your furniture pieces via phone, email, or our website.' },
      { step: 'Condition Review', detail: 'Our team assesses photos to determine donation eligibility and the best placement.' },
      { step: 'Schedule Pickup', detail: 'Choose a pickup window that works for you — we handle the rest.' },
      { step: 'Professional Removal', detail: 'Our crew carefully removes furniture, protecting your floors and doorways.' },
      { step: 'Delivery', detail: 'Furniture is cleaned if needed and delivered directly to its new home.' },
      { step: 'Donation Receipt', detail: 'Receive your tax-deductible donation receipt with itemized details.' }
    ],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop&q=80',
    faqs: [
      { question: 'What condition does furniture need to be in?', answer: 'Furniture should be structurally sound with no major damage. Minor cosmetic wear is acceptable. Items should be free of stains, odors, bed bugs, and mold.' },
      { question: 'Do you accept mattresses?', answer: 'We accept mattresses that are less than 5 years old, stain-free, and in good condition. Due to health regulations, mattresses with any damage or soiling cannot be accepted.' },
      { question: 'Can you disassemble large furniture?', answer: 'Yes, our team can disassemble beds, desks, shelving units, and other large pieces. We bring all necessary tools and hardware bags to keep everything organized.' },
      { question: 'Do you take furniture from upper floors?', answer: 'Absolutely. We handle furniture removal from any floor, including apartments and multi-story homes. Elevator access is helpful but not required.' },
      { question: 'How do you determine fair market value?', answer: 'We use industry-standard valuation guides and the item\'s condition to estimate fair market value for your donation receipt.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&q=80', alt: 'Quality sofa ready for donation', caption: 'Living room furniture in great condition' },
      { url: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop&q=80', alt: 'Bedroom furniture set', caption: 'Complete bedroom sets welcomed' },
      { url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&q=80', alt: 'Modern dining table setup', caption: 'Dining furniture finds new homes' },
      { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80', alt: 'Office furniture and desks', caption: 'Office furniture donated to nonprofits' }
    ],
    relatedServices: ['donation-services', 'commercial-services', 'clean-out-services'],
    stats: [
      { value: '3,500+', label: 'Pieces Donated' },
      { value: '850+', label: 'Families Helped' },
      { value: '100%', label: 'Free Pickup' }
    ],
    testimonial: { text: 'We needed to clear an entire home of furniture for a renovation. Echo Swift assessed every piece, donated what they could, and handled the rest responsibly. Incredible team.', name: 'James Rodriguez', location: 'Aurora, CO' }
  },
  'appliance-management': {
    title: 'Appliance Management',
    icon: Recycle,
    description: 'Approved appliances and electronics with responsible recycling and donation when possible.',
    longDescription: 'Our appliance management service handles the responsible disposal, recycling, and donation of household appliances and electronics. We work with certified recycling facilities and donation centers to ensure working appliances find new homes while non-functional items are properly recycled according to environmental regulations. From refrigerators to small electronics, we manage every step of the process.',
    features: [
      { title: 'Working Appliance Donation', description: 'Functional appliances are tested and donated to families and organizations in need.' },
      { title: 'Certified E-Waste Recycling', description: 'Partnerships with R2-certified recycling facilities for responsible electronics recycling.' },
      { title: 'Hazardous Material Handling', description: 'Proper handling of refrigerants, mercury, lead, and other hazardous components.' },
      { title: 'Large Appliance Removal', description: 'Safe disconnection and removal of washers, dryers, refrigerators, and more.' },
      { title: 'Environmental Compliance', description: 'Full compliance with EPA regulations and Colorado environmental standards.' },
      { title: 'Small Electronics', description: 'TVs, computers, printers, phones, and other small electronics accepted.' }
    ],
    process: [
      { step: 'Inventory Items', detail: 'Tell us what appliances and electronics you need removed — photos help us prepare.' },
      { step: 'Condition Assessment', detail: 'We determine which items are working, repairable, or need recycling.' },
      { step: 'Schedule Service', detail: 'Book a pickup time that works for your schedule.' },
      { step: 'Safe Removal', detail: 'Our trained team safely disconnects and removes all appliances.' },
      { step: 'Sort & Process', detail: 'Working units are donated, repairable items refurbished, and the rest recycled.' },
      { step: 'Documentation', detail: 'Receive disposal certificates and donation receipts as applicable.' }
    ],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop&q=80',
    faqs: [
      { question: 'Do you handle refrigerant removal?', answer: 'Yes, our EPA-certified technicians properly recover refrigerants from AC units, refrigerators, and freezers before recycling, in full compliance with EPA Section 608 regulations.' },
      { question: 'Can you remove built-in appliances?', answer: 'Yes, we can disconnect and remove built-in dishwashers, microwaves, ovens, and cooktops. We recommend turning off water and gas connections before our arrival.' },
      { question: 'What electronics do you accept?', answer: 'We accept TVs, monitors, computers, laptops, printers, phones, tablets, gaming consoles, and most consumer electronics. We cannot accept items with physical damage that poses a safety risk.' },
      { question: 'Is there a recycling fee?', answer: 'Pricing depends on the type and quantity of appliances. Working appliances that qualify for donation may have reduced or waived fees. Contact us for a free quote.' },
      { question: 'What happens to recycled appliances?', answer: 'Appliances are broken down at certified facilities where metals, plastics, glass, and other materials are separated and recycled. We provide a certificate of recycling upon request.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&q=80', alt: 'Kitchen appliances for management', caption: 'Kitchen appliances properly managed' },
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop&q=80', alt: 'Appliance recycling process', caption: 'Responsible recycling process' },
      { url: 'https://images.unsplash.com/photo-1562077772-3bd90f697aaa?w=600&h=400&fit=crop&q=80', alt: 'Sorted recycling materials', caption: 'Materials sorted for recycling' },
      { url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop&q=80', alt: 'E-waste recycling facility', caption: 'Certified recycling partners' }
    ],
    relatedServices: ['waste-management', 'commercial-services', 'clean-out-services'],
    stats: [
      { value: '2,000+', label: 'Appliances Processed' },
      { value: '85%', label: 'Recycled or Donated' },
      { value: 'R2', label: 'Certified Partners' }
    ],
    testimonial: { text: 'They removed 3 old refrigerators and a washer/dryer set from our rental properties. Handled the refrigerant properly and even donated the working dryer. Very professional.', name: 'Michael Torres', location: 'Lakewood, CO' }
  },
  'clean-out-services': {
    title: 'Clean-Out Services',
    icon: Trash,
    description: 'Property clean-outs with donation priority for estate clearing and move-out services.',
    longDescription: 'Our comprehensive clean-out services handle entire properties with sensitivity and efficiency. Whether you\'re dealing with an estate, moving out, or downsizing, we manage the entire process while prioritizing donation and recycling. We sort through items, identify donation opportunities, and ensure responsible disposal of everything else. Our experienced team works quickly and respectfully to return properties to a clean, move-in ready condition.',
    features: [
      { title: 'Full Property Clean-Outs', description: 'Complete removal of all contents from houses, apartments, condos, and storage units.' },
      { title: 'Estate Services', description: 'Sensitive handling of estate clean-outs with item sorting and family coordination.' },
      { title: 'Move-Out Assistance', description: 'Fast turnaround for move-out deadlines with broom-clean condition guaranteed.' },
      { title: 'Donation Coordination', description: 'We sort and separate all donatable items, maximizing community benefit.' },
      { title: 'Debris Removal', description: 'Construction debris, yard waste, and general refuse handled and disposed properly.' },
      { title: 'Same-Day Service', description: 'Emergency and same-day clean-out services available for urgent situations.' }
    ],
    process: [
      { step: 'On-Site Assessment', detail: 'We visit the property to assess scope, identify donation opportunities, and provide a quote.' },
      { step: 'Detailed Quote', detail: 'Receive a transparent, all-inclusive quote with timeline and service breakdown.' },
      { step: 'Sorting Phase', detail: 'Our team methodically sorts items into donation, recycling, and disposal categories.' },
      { step: 'Donation Processing', detail: 'Qualifying items are documented and delivered to partner charities.' },
      { step: 'Complete Removal', detail: 'All remaining items are removed and the property is cleaned to broom-clean standards.' },
      { step: 'Final Walkthrough', detail: 'Walk through the property with our team to confirm satisfaction before sign-off.' }
    ],
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    faqs: [
      { question: 'How long does a full property clean-out take?', answer: 'Most residential clean-outs are completed in 1-2 days depending on property size and contents. Studios and 1-bedroom units are often done in a few hours. We provide a timeline estimate during the assessment.' },
      { question: 'Do you handle hoarding situations?', answer: 'Yes, we have experience with hoarding clean-outs and approach every situation with compassion and discretion. We work with the homeowner or family at a pace that is comfortable.' },
      { question: 'Can you coordinate with a realtor or property manager?', answer: 'Absolutely. We regularly work with realtors, property managers, and attorneys to coordinate clean-outs on their timeline. We can provide direct communication with your contacts.' },
      { question: 'What happens to items I want to keep?', answer: 'During the assessment, you identify items to keep and we set those aside. If you cannot be present, you can tag items or provide a detailed list for our team.' },
      { question: 'Do you clean the property after removal?', answer: 'Yes, our standard service includes broom-clean condition. We also offer deep cleaning as an add-on service for an additional fee.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&fit=crop&q=80', alt: 'Clean room after service', caption: 'Property restored to move-in condition' },
      { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&q=80', alt: 'Clean modern living space', caption: 'Living spaces cleared and cleaned' },
      { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop&q=80', alt: 'Clean kitchen after removal', caption: 'Kitchens cleaned to broom-clean standard' },
      { url: 'https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=600&h=400&fit=crop&q=80', alt: 'Empty bedroom ready for new tenant', caption: 'Bedrooms ready for the next chapter' }
    ],
    relatedServices: ['donation-services', 'waste-management', 'furniture-donation'],
    stats: [
      { value: '400+', label: 'Properties Cleared' },
      { value: '1-2 Days', label: 'Average Turnaround' },
      { value: '60%', label: 'Items Donated' }
    ],
    testimonial: { text: 'Handled my mother\'s estate clean-out with incredible sensitivity. They sorted everything carefully, donated her furniture to families in need, and left the house spotless. Can\'t thank them enough.', name: 'Emily Chen', location: 'Lakewood, CO' }
  },
  'waste-management': {
    title: 'Waste Management',
    icon: HardHat,
    description: 'Professional waste management focused on reducing landfill impact through recycling and reuse.',
    longDescription: 'Our waste management services go beyond simple disposal. We implement a comprehensive approach that prioritizes waste reduction, recycling, and responsible disposal. Through partnerships with recycling facilities and waste-to-energy programs, we ensure minimal environmental impact while providing efficient waste removal services for both residential and commercial clients across the Denver Metro area.',
    features: [
      { title: 'Comprehensive Sorting', description: 'All waste is sorted on-site to maximize recycling and minimize landfill impact.' },
      { title: 'Maximum Diversion', description: 'We achieve an 85%+ diversion rate by prioritizing recycling, donation, and reuse.' },
      { title: 'Certified Facilities', description: 'Partnerships with state-certified disposal and recycling facilities.' },
      { title: 'Scheduled Service', description: 'Regular pickup schedules available for ongoing waste management needs.' },
      { title: 'Residential & Commercial', description: 'Tailored solutions for homes, apartments, offices, and job sites.' },
      { title: 'Impact Reporting', description: 'Detailed reports on what was recycled, donated, and diverted from landfill.' }
    ],
    process: [
      { step: 'Needs Assessment', detail: 'We evaluate your waste management requirements and identify optimization opportunities.' },
      { step: 'Custom Plan', detail: 'A tailored removal plan is developed to maximize recycling and minimize costs.' },
      { step: 'Schedule Service', detail: 'Choose one-time pickup or set up a recurring service schedule.' },
      { step: 'Collection & Sorting', detail: 'Waste is collected and sorted into recyclable, reusable, and disposal streams.' },
      { step: 'Processing', detail: 'Materials are processed through the appropriate recycling or disposal channels.' },
      { step: 'Summary Report', detail: 'Receive a detailed report on waste volumes, diversion rates, and environmental impact.' }
    ],
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1562077772-3bd90f697aaa?w=800&h=600&fit=crop&q=80',
    faqs: [
      { question: 'What is your landfill diversion rate?', answer: 'We achieve an average 85% diversion rate across all services. This means only 15% of materials we collect end up in landfill — the rest is recycled, donated, composted, or sent to waste-to-energy programs.' },
      { question: 'Do you handle construction debris?', answer: 'Yes, we handle construction and renovation debris including lumber, drywall, metal, concrete, and mixed materials. We sort on-site to maximize recycling of construction materials.' },
      { question: 'Can you set up recurring service?', answer: 'Yes, we offer weekly, bi-weekly, and monthly recurring service for residential and commercial clients. Volume discounts are available for regular accounts.' },
      { question: 'What materials can you recycle?', answer: 'We recycle metals, plastics (types 1-7), glass, paper, cardboard, electronics, textiles, and construction materials. We also compost organic waste when possible.' },
      { question: 'Do you provide waste audits?', answer: 'Yes, we offer waste audits for commercial clients to analyze current waste streams and identify opportunities for reduction, recycling, and cost savings.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop&q=80', alt: 'Recycling and waste processing', caption: 'Waste sorted for maximum recycling' },
      { url: 'https://images.unsplash.com/photo-1562077772-3bd90f697aaa?w=600&h=400&fit=crop&q=80', alt: 'Color-coded recycling bins', caption: 'Organized recycling streams' },
      { url: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&h=400&fit=crop&q=80', alt: 'Eco-friendly waste management', caption: 'Environmentally responsible disposal' },
      { url: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&h=400&fit=crop&q=80', alt: 'Waste collection in progress', caption: 'Professional collection service' }
    ],
    relatedServices: ['appliance-management', 'clean-out-services', 'commercial-services'],
    stats: [
      { value: '85%+', label: 'Diversion Rate' },
      { value: '1,200+', label: 'Tons Recycled' },
      { value: '50mi', label: 'Service Radius' }
    ],
    testimonial: { text: 'We switched to Echo Swift for our construction site waste management. Their sorting and recycling approach cut our disposal costs by 30% and we met our sustainability goals. Win-win.', name: 'David Park', location: 'Westminster, CO' }
  },
  'commercial-services': {
    title: 'Commercial Services',
    icon: Building2,
    description: 'Office furniture and equipment donation with minimal disruption to business operations.',
    longDescription: 'Our commercial services are designed specifically for businesses looking to responsibly manage office furniture, equipment, and waste. We work around your schedule to minimize disruption, handle large-scale clean-outs, and prioritize donation of usable items. From office relocations and lease turnovers to regular waste management and IT equipment disposal, we provide professional, efficient service with detailed documentation.',
    features: [
      { title: 'Flexible Scheduling', description: 'After-hours, weekend, and phased removal available to minimize business disruption.' },
      { title: 'Office Furniture Removal', description: 'Cubicles, desks, chairs, conference tables, and reception furniture handled efficiently.' },
      { title: 'IT Equipment & E-Waste', description: 'Secure handling and certified destruction or recycling of IT equipment and data devices.' },
      { title: 'Project Management', description: 'Dedicated project manager for large-scale commercial clean-outs and relocations.' },
      { title: 'Corporate Donation Programs', description: 'Structured donation programs with impact reporting for CSR and sustainability goals.' },
      { title: 'Detailed Reporting', description: 'Comprehensive service reports with waste audits, diversion data, and donation summaries.' }
    ],
    process: [
      { step: 'Consultation', detail: 'Schedule a site visit to assess scope, access requirements, and timeline needs.' },
      { step: 'Custom Proposal', detail: 'Receive a detailed proposal with phasing, costs, and logistics plan.' },
      { step: 'Scheduling', detail: 'We coordinate timing with your operations team to minimize any disruption.' },
      { step: 'Execution', detail: 'Our commercial crew handles removal, sorting, and cleaning on schedule.' },
      { step: 'Donation & Recycling', detail: 'Usable items are donated; electronics and materials are responsibly recycled.' },
      { step: 'Service Report', detail: 'Receive a detailed report with photos, donation receipts, and diversion data.' }
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&q=80',
    faqs: [
      { question: 'Can you work after business hours?', answer: 'Yes, we offer after-hours (evenings) and weekend service for commercial clients. We can also work during business hours with minimal disruption by phasing the removal across multiple visits.' },
      { question: 'Do you handle data destruction?', answer: 'We partner with certified data destruction providers who offer on-site hard drive shredding and provide certificates of destruction. Chain-of-custody documentation is available.' },
      { question: 'What size commercial jobs do you handle?', answer: 'From a single office to entire corporate campuses. We have handled clean-outs of 200+ workstation facilities and can scale our crew and equipment to match any project size.' },
      { question: 'Can you provide documentation for sustainability reporting?', answer: 'Yes, we provide detailed diversion reports including weight data, recycling certificates, donation receipts, and environmental impact summaries suitable for CSR and sustainability reports.' },
      { question: 'Do you handle lease turnover clean-outs?', answer: 'Yes, we specialize in lease turnover clean-outs and can coordinate directly with property managers and landlords. We ensure spaces are returned to lease-required condition.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80', alt: 'Modern office space', caption: 'Office furniture removal and donation' },
      { url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop&q=80', alt: 'Conference room setup', caption: 'Conference room clear-outs' },
      { url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&q=80', alt: 'Workspace furniture', caption: 'Workstation furniture recycled' },
      { url: 'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=600&h=400&fit=crop&q=80', alt: 'Clean empty office', caption: 'Office returned to lease condition' }
    ],
    relatedServices: ['furniture-donation', 'appliance-management', 'waste-management'],
    stats: [
      { value: '150+', label: 'Businesses Served' },
      { value: '0', label: 'Days Disrupted' },
      { value: '$2M+', label: 'Items Donated' }
    ],
    testimonial: { text: 'Echo Swift cleared our 50,000 sq ft office over a weekend. Not a single work day disrupted. They donated our furniture to three local nonprofits and gave us a full sustainability report. Outstanding.', name: 'Karen Liu', location: 'Greenwood Village, CO' }
  }
};

const FAQItem: React.FC<{ faq: FAQ; isOpen: boolean; onToggle: () => void }> = ({ faq, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 last:border-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left group"
    >
      <span className="text-base font-bold text-gray-900 pr-4 group-hover:text-gray-600 transition-colors">{faq.question}</span>
      <ChevronDown size={20} className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
      <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
    </div>
  </div>
);

export const ServicePage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const service = serviceSlug ? serviceDetails[serviceSlug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors rounded-lg"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const relatedServiceData = service.relatedServices
    .map(slug => ({ slug, ...serviceDetails[slug] }))
    .filter(s => s.title);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero Banner ── */}
      <div className="relative bg-gray-900 text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-300 hover:text-white mb-12 transition-colors group bg-gray-800/50 px-4 py-2 rounded"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold">Back to Home</span>
          </button>
          
          <div className="max-w-4xl">
            <div className="w-20 h-20 bg-white flex items-center justify-center mb-8 rounded-lg">
              <Icon size={40} className="text-gray-900" strokeWidth={2.5} />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl">
            {service.stats.map((stat, i) => (
              <div key={i} className="border-l-4 border-white pl-4">
                <div className="text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-20">

            {/* Overview */}
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 block">Overview</span>
              <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">About This Service</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{service.longDescription}</p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img src={service.image} alt={`${service.title}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img src={service.secondaryImage} alt={`${service.title} in action`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a href="tel:+17205551234" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors font-bold rounded-lg">
                  <Phone size={20} />
                  <span>Call (720) 555-1234</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); navigate('/#contact'); }}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors font-bold rounded-lg"
                >
                  <Mail size={20} />
                  <span>Get Free Quote</span>
                </a>
              </div>
            </div>

            {/* Features */}
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 block">Features</span>
              <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {service.features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <h3 className="font-black text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-8">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Echo Swift */}
            <div className="relative bg-gray-900 text-white p-10 md:p-12 overflow-hidden rounded-xl">
              <div className="absolute inset-0 opacity-10">
                <img src={service.image} alt="Background" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">Why Choose Echo Swift?</h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
                  We're committed to responsible waste management with a focus on donation and community benefit. Our professional team ensures efficient service while maximizing the positive impact of every pickup.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {service.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl md:text-4xl font-black mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process */}
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 block">Process</span>
              <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">How It Works</h2>
              <div className="space-y-0">
                {service.process.map((item, index) => (
                  <div key={index} className="flex items-start gap-6 group relative">
                    {index < service.process.length - 1 && (
                      <div className="absolute left-6 top-12 w-px h-full bg-gray-200 -translate-x-1/2"></div>
                    )}
                    <div className="relative z-10 w-12 h-12 bg-gray-900 text-white flex items-center justify-center flex-shrink-0 font-black text-lg rounded-full">
                      {index + 1}
                    </div>
                    <div className="flex-1 pb-8">
                      <h4 className="font-black text-gray-900 text-lg mb-1">{item.step}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 block">Our Work</span>
              <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">See It In Action</h2>
              <div className="grid grid-cols-2 gap-4">
                {service.gallery.map((img, index) => (
                  <div key={index} className="group relative aspect-[3/2] overflow-hidden rounded-lg">
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-sm font-bold">{img.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 block">FAQ</span>
              <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">Common Questions</h2>
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                {service.faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    faq={faq}
                    isOpen={openFAQ === index}
                    onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">

              <div className="bg-gray-900 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-black mb-4">Get Started Today</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Contact us to schedule your {service.title.toLowerCase()} or get a free quote.
                </p>
                
                <a href="tel:+17205551234" className="flex items-center gap-4 bg-white hover:bg-gray-100 text-gray-900 p-5 transition-colors w-full group mb-4 rounded-lg">
                  <div className="w-12 h-12 bg-gray-900 group-hover:bg-gray-800 flex items-center justify-center flex-shrink-0 transition-colors rounded-lg">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 mb-1">Call Now</div>
                    <div className="font-black text-lg">(720) 555-1234</div>
                  </div>
                </a>

                <a href="mailto:info@echoswift.com" className="flex items-center gap-4 bg-white hover:bg-gray-100 text-gray-900 p-5 transition-colors w-full group rounded-lg">
                  <div className="w-12 h-12 bg-gray-900 group-hover:bg-gray-800 flex items-center justify-center flex-shrink-0 transition-colors rounded-lg">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 mb-1">Email Us</div>
                    <div className="font-black text-sm">info@echoswift.com</div>
                  </div>
                </a>

                <div className="text-xs text-gray-400 text-center mt-4">
                  Available Monday-Saturday, 8am-6pm
                </div>
              </div>

              <div className="bg-gray-50 p-6 space-y-4 rounded-xl">
                <div>
                  <h4 className="font-black text-gray-900 mb-2 text-sm uppercase tracking-wider">Service Hours</h4>
                  <p className="text-sm text-gray-600">Monday - Saturday: 8am - 6pm</p>
                  <p className="text-sm text-gray-600">Sunday: Closed</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-black text-gray-900 mb-2 text-sm uppercase tracking-wider">Service Area</h4>
                  <p className="text-sm text-gray-600">Denver Metro & 50-mile radius</p>
                  <p className="text-xs text-gray-500 mt-2">Same-day pickup available in most areas</p>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-900 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-emerald-500">★</span>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-900">5.0</span>
                </div>
                <p className="text-sm text-gray-600 italic mb-4">
                  "{service.testimonial.text}"
                </p>
                <p className="text-xs font-bold text-gray-900">— {service.testimonial.name}, {service.testimonial.location}</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Related Services ── */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 block">Explore More</span>
            <h2 className="text-4xl font-black text-gray-900">Related Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServiceData.map((related) => {
              const RelatedIcon = related.icon;
              return (
                <Link
                  key={related.slug}
                  to={`/services/${related.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gray-900 group-hover:bg-emerald-600 flex items-center justify-center rounded-lg transition-colors">
                        <RelatedIcon size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-lg font-black text-gray-900">{related.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{related.description}</p>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="bg-gray-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule your {service.title.toLowerCase()} today and experience professional service with a focus on community impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17205551234"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-gray-900 hover:bg-gray-100 transition-colors font-bold text-lg rounded-lg"
            >
              <Phone size={24} />
              <span>Call Now</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); navigate('/#contact'); }}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors font-bold text-lg rounded-lg"
            >
              <span>Request Quote</span>
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Same-day service available • Serving Denver Metro • Monday-Saturday 8am-6pm
          </p>
        </div>
      </div>
    </div>
  );
};
