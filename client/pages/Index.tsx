import { Button } from "@/components/ui/button";
import { CheckCircle2, Menu, X, Share2, MoreVertical, Globe } from "lucide-react";
import { useState } from "react";

type Language = "el" | "en";

interface TraceabilityData {
  productName: string;
  productNameGr: string;
  lotNumber: string;
  company: string;
  productImage: string;
  originMethod: string;
  originMethodGr: string;
  geographicOrigin: string;
  geographicOriginGr: string;
  harvestDate: string;
  processingDate: string;
  bestBeforeDate: string;
  sizeGrade: string;
  sizeGradeGr: string;
  format: string;
  formatGr: string;
  freezingType: string;
  freezingTypeGr: string;
  iceCoatingPercentage: string;
  processingLocation: string;
  processingLocationGr: string;
  originStatus: string;
  originStatusGr: string;
}

const mockData: TraceabilityData = {
  productName: "Greek Seabream",
  productNameGr: "Ελληνική Τσιπούρα",
  lotNumber: "GR-TS-1210",
  company: "ATLANTIDA S.A. TOURNAVITIS",
  productImage: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=500&fit=crop",
  originMethod: "Farmed / Aquaculture",
  originMethodGr: "Ιχθυοκαλλιέργεια",
  geographicOrigin: "Euboea, Greece",
  geographicOriginGr: "Εύβοια, Ελλάδα",
  harvestDate: "10/12/2025",
  processingDate: "11/12/2025",
  bestBeforeDate: "10/12/2027",
  sizeGrade: "400-600g",
  sizeGradeGr: "400-600g",
  format: "Whole, Gutted, Frozen",
  formatGr: "Ολόκληρο, Αποσπλάχνωσμένο, Κατεψυγμένο",
  freezingType: "IQF",
  freezingTypeGr: "IQF",
  iceCoatingPercentage: "15%",
  processingLocation: "ATLANTIDA S.A., Kavala",
  processingLocationGr: "ATLANTIDA S.A., Καβάλα",
  originStatus: "Certified / GLOBALG.A.P.",
  originStatusGr: "Πιστοποιημένος / GLOBALG.A.P.",
};

const certifications = [
  { name: "BRCGS" },
  { name: "IFS" },
  { name: "ISO 22000" },
  { name: "HACCP" },
];

const navItems = [
  { label: "Dashboard", labelGr: "Ταμπλό" },
  { label: "Reports", labelGr: "Αναφορές" },
  { label: "Analytics", labelGr: "Ανάλυση" },
  { label: "Traceability", labelGr: "Ιχνηλασιμότητα" },
  { label: "Certifications", labelGr: "Πιστοποιήσεις" },
  { label: "Settings", labelGr: "Ρυθμίσεις" },
];

const labels = {
  en: {
    traceabilityReport: "Traceability Report",
    processingQuality: "Processing Quality guaranteed by",
    certifications: "Certifications",
    processingStatement: "The product processing took place at the Kavala facilities, with BRCGS certification.",
    origin: "Origin",
    productName: "Product Name",
    originMethod: "Origin Method",
    geographicOrigin: "Geographic Origin",
    harvestDate: "Harvest Date",
    processingDate: "Processing Date",
    bestBeforeDate: "Best Before Date",
    technicalSpecs: "Technical Specifications",
    sizeGrade: "Size Grade",
    format: "Format",
    freezingType: "Freezing Type",
    iceCoating: "Ice Coating %",
    processingLocation: "Processing Location",
    originStatus: "Origin Status",
    foodSafety: "Food Safety Certified",
    validUntil: "Valid until December 2026",
    contactB2b: "Contact for Bulk Order",
    viewCatalog: "View Full Product Catalog",
    moreInfo: "More Information",
    nutrition: "Nutritional Information",
    nutritionSource: "Per 100g (Source: USDA Food Data Central)",
    nutritionLink: "View Full Nutritional Data",
  },
  el: {
    traceabilityReport: "Αναφορά Ιχνηλασιμότητας",
    processingQuality: "Η ποιότητα επεξεργασίας εγγυάται",
    certifications: "Πιστοποιήσεις",
    processingStatement: "Η επεξεργασία του προϊόντος έγινε στις εγκαταστάσεις της Καβάλας, με πιστοποίηση BRCGS.",
    origin: "Προέλευση",
    productName: "Όνομα Προϊόντος",
    originMethod: "Μέθοδος Προέλευσης",
    geographicOrigin: "Γεωγραφική Προέλευση",
    harvestDate: "Ημερομηνία Συγκομιδής",
    processingDate: "Ημερομηνία Επεξεργασίας",
    bestBeforeDate: "Ημερομηνία Λήξης",
    technicalSpecs: "Τεχνικές Προδιαγραφές",
    sizeGrade: "Κατηγορία Μεγέθους",
    format: "Μορφή Προϊόντος",
    freezingType: "Τύπος Κατάψυξης",
    iceCoating: "Ποσοστό Επί Πάγου",
    processingLocation: "Εγκατάσταση Επεξεργασίας",
    originStatus: "Κατάσταση Προέλευσης",
    foodSafety: "Πιστοποιημένη Ασφάλεια Τροφίμων",
    validUntil: "Ισχύει έως Δεκέμβριο 2026",
    contactB2b: "Επικοινωνία για Παραγγελία Χονδρικής",
    viewCatalog: "Προβολή Πλήρους Καταλόγου Προϊόντων",
    moreInfo: "Περισσότερες Πληροφορίες",
    nutrition: "Διατροφικές Πληροφορίες",
    nutritionSource: "Ανά 100g (Πηγή: USDA Food Data Central)",
    nutritionLink: "Προβολή Πλήρων Διατροφικών Στοιχείων",
  },
};

const nutritionData = [
  { name: "en", label: "Energy", value: "82 kcal", unit: "kcal" },
  { name: "en", label: "Protein", value: "16.5 g", unit: "g" },
  { name: "en", label: "Fat", value: "1.0 g", unit: "g" },
  { name: "en", label: "Carbohydrates", value: "0 g", unit: "g" },
  { name: "en", label: "Fiber", value: "0 g", unit: "g" },
  { name: "en", label: "Sodium", value: "64 mg", unit: "mg" },
  { name: "en", label: "Potassium", value: "380 mg", unit: "mg" },
  { name: "en", label: "Calcium", value: "20 mg", unit: "mg" },
  { name: "en", label: "Iron", value: "0.8 mg", unit: "mg" },
  { name: "en", label: "Omega-3 Fatty Acids", value: "0.15 g", unit: "g" },
  { name: "el", label: "Ενέργεια", value: "82 kcal", unit: "kcal" },
  { name: "el", label: "Πρωτεΐνη", value: "16.5 g", unit: "g" },
  { name: "el", label: "Λίπος", value: "1.0 g", unit: "g" },
  { name: "el", label: "Υδατάνθρακες", value: "0 g", unit: "g" },
  { name: "el", label: "Ίνες", value: "0 g", unit: "g" },
  { name: "el", label: "Νάτριο", value: "64 mg", unit: "mg" },
  { name: "el", label: "Κάλιο", value: "380 mg", unit: "mg" },
  { name: "el", label: "Ασβέστιο", value: "20 mg", unit: "mg" },
  { name: "el", label: "Σίδηρος", value: "0.8 mg", unit: "mg" },
  { name: "el", label: "Λιπαρά Οξέα Ωμέγα-3", value: "0.15 g", unit: "g" },
];

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("el");

  const t = labels[language];
  const nutrition = nutritionData.filter((item) => item.name === language);

  const getLabel = (elLabel: string, enLabel: string) => {
    return language === "el" ? elLabel : enLabel;
  };

  const originData = [
    { en: "Product Name", el: "Όνομα Προϊόντος", value: language === "el" ? mockData.productNameGr : mockData.productName },
    { en: "Origin Method", el: "Μέθοδος Προέλευσης", value: language === "el" ? mockData.originMethodGr : mockData.originMethod },
    { en: "Geographic Origin", el: "Γεωγραφική Προέλευση", value: language === "el" ? mockData.geographicOriginGr : mockData.geographicOrigin },
    { en: "Harvest Date", el: "Ημερομηνία Συγκομιδής", value: mockData.harvestDate },
    { en: "Processing Date", el: "Ημερομηνία Επεξεργασίας", value: mockData.processingDate },
    { en: "Best Before Date", el: "Ημερομηνία Λήξης", value: mockData.bestBeforeDate },
  ];

  const techData = [
    { en: "Size Grade", el: "Κατηγορία Μεγέθους", value: mockData.sizeGrade },
    { en: "Format", el: "Μορφή Προϊόντος", value: language === "el" ? mockData.formatGr : mockData.format },
    { en: "Freezing Type", el: "Τύπος Κατάψυξης", value: mockData.freezingType },
    { en: "Ice Coating %", el: "Ποσοστό Επί Πάγου", value: mockData.iceCoatingPercentage },
    { en: "Processing Location", el: "Εγκατάσταση Επεξεργασίας", value: language === "el" ? mockData.processingLocationGr : mockData.processingLocation },
    { en: "Origin Status", el: "Κατάσταση Προέλευσης", value: language === "el" ? mockData.originStatusGr : mockData.originStatus },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-40 bg-navy text-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-navy-light rounded-lg transition-colors"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-cyan rounded-full flex-shrink-0"></div>
          <span className="font-bold text-base">ATLANTIDA</span>
        </div>
        <button
          onClick={() => setLanguage(language === "el" ? "en" : "el")}
          className="p-2 hover:bg-navy-light rounded-lg transition-colors flex items-center gap-1"
          title="Toggle Language"
        >
          <Globe size={18} />
          <span className="text-xs font-bold">{language.toUpperCase()}</span>
        </button>
      </header>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`fixed lg:relative top-0 left-0 h-screen bg-navy text-white w-64 z-30 transform transition-transform duration-300 lg:transform-none shadow-lg
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        >
          <div className="p-6 border-b border-navy-light">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan rounded-lg flex-shrink-0"></div>
              <span className="font-bold text-lg">ATLANTIDA</span>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm ${
                  item.label === "Dashboard"
                    ? "bg-cyan text-navy font-semibold"
                    : "text-gray-200 hover:bg-navy-light"
                }`}
              >
                {language === "el" ? item.labelGr : item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Desktop Header */}
          <header className="hidden lg:flex sticky top-0 z-20 bg-navy text-white border-b border-gray-200 px-8 py-4 items-center justify-between shadow-sm">
            <h1 className="text-2xl font-bold">{t.traceabilityReport}</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-navy-light rounded-lg transition-colors">
                <Share2 size={20} />
              </button>
              <button
                onClick={() => setLanguage(language === "el" ? "en" : "el")}
                className="p-2 hover:bg-navy-light rounded-lg transition-colors flex items-center gap-2"
                title="Toggle Language"
              >
                <Globe size={20} />
                <span className="text-sm font-bold">{language.toUpperCase()}</span>
              </button>
              <button className="p-2 hover:bg-navy-light rounded-lg transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>
          </header>

          {/* Close sidebar overlay on mobile when clicking content */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-20 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <div className="p-4 lg:p-8 space-y-6 max-w-6xl mx-auto">
            {/* Product Header Section */}
            <section className="bg-white rounded-lg p-6 lg:p-8 border border-gray-200 shadow-sm">
              <div className="space-y-5">
                {/* Title and Lot Number */}
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-2 text-navy">
                    {t.traceabilityReport}:<br />
                    <span className="text-cyan block mt-1">
                      {language === "el" ? mockData.productNameGr : mockData.productName}
                    </span>
                  </h2>
                  <p className="text-sm lg:text-base font-medium text-gray-700 mt-2 mb-1">
                    {language === "el" ? mockData.productNameGr : mockData.productName}
                  </p>
                  <p className="text-lg lg:text-2xl font-bold text-navy">
                    Lot No: {mockData.lotNumber}
                  </p>
                </div>

                {/* Company and Quality Statement */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600 font-medium mb-1">{t.processingQuality}</p>
                  <p className="text-base font-bold text-navy">{mockData.company}</p>
                </div>

                {/* Certification Logos - Clean Professional Display */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-4">
                    {t.certifications}
                  </p>

                  {/* Logo Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className="flex flex-col items-center justify-center p-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-16 h-16 flex items-center justify-center bg-white rounded border border-gray-200 mb-2">
                          <span className="text-2xl font-bold text-navy">{cert.name.charAt(0)}</span>
                        </div>
                        <span className="text-xs font-semibold text-center text-gray-700 leading-tight">{cert.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Professional Processing Statement */}
                  <p className="text-sm text-gray-700 leading-relaxed font-medium pt-4 border-t border-gray-200">
                    {t.processingStatement}
                  </p>
                </div>
              </div>
            </section>

            {/* Product Image */}
            <section className="bg-white rounded-lg p-6 lg:p-8 border border-gray-200 shadow-sm overflow-hidden">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-navy mb-4">
                  {language === "el" ? mockData.productNameGr : mockData.productName}
                </h3>
              </div>
              <img
                src={mockData.productImage}
                alt={language === "el" ? mockData.productNameGr : mockData.productName}
                className="w-full h-auto rounded-lg object-cover max-h-96"
              />
            </section>

            {/* Traceability Data Block - Origin & Timeline */}
            <section className="bg-white rounded-lg p-6 lg:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-1 pb-2 border-b-2 border-cyan inline-block">
                {t.origin}
              </h3>

              <div className="mt-4 space-y-0">
                {originData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="text-sm font-bold text-navy">{language === "el" ? item.el : item.en}</span>
                    <span className="text-sm font-medium text-gray-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Specifications */}
            <section className="bg-white rounded-lg p-6 lg:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-1 pb-2 border-b-2 border-cyan inline-block">
                {t.technicalSpecs}
              </h3>

              <div className="mt-4 space-y-0">
                {techData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="text-sm font-bold text-navy">{language === "el" ? item.el : item.en}</span>
                    <span className="text-sm font-medium text-gray-700">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Compliance Indicators */}
              <div className="pt-4 mt-4 space-y-2 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{t.foodSafety}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{t.validUntil}</span>
                </div>
              </div>
            </section>

            {/* Nutritional Information */}
            <section className="bg-white rounded-lg p-6 lg:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-1 pb-2 border-b-2 border-cyan inline-block">
                {t.nutrition}
              </h3>

              <p className="text-xs text-gray-600 mt-4 mb-4">{t.nutritionSource}</p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 bg-gray-50">
                      <th className="text-left py-3 px-3 font-bold text-navy">
                        {language === "el" ? "Θρεπτικό Συστατικό" : "Nutrient"}
                      </th>
                      <th className="text-right py-3 px-3 font-bold text-navy">
                        {language === "el" ? "Ποσότητα" : "Amount"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {nutrition.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-3 font-medium text-gray-700">{item.label}</td>
                        <td className="py-3 px-3 text-right text-gray-700">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href="https://fdc.nal.usda.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-cyan hover:text-navy transition-colors underline"
                >
                  {t.nutritionLink} →
                </a>
              </div>
            </section>

            {/* Call to Action */}
            <section className="space-y-3 pb-8">
              <Button
                className="w-full bg-navy hover:bg-navy-light text-white font-bold py-4 lg:py-5 text-base lg:text-lg rounded-lg shadow-md transition-all hover:shadow-lg"
                onClick={() => alert(language === "el" ? "Επικοινωνία για παραγγελία" : "Contact for bulk order")}
              >
                {t.contactB2b}
              </Button>

              <Button
                className="w-full bg-white text-navy border-2 border-navy font-bold py-4 lg:py-5 text-base lg:text-lg rounded-lg hover:bg-gray-50 transition-all"
                onClick={() => alert(language === "el" ? "Προβολή καταλόγου προϊόντων" : "View product catalog")}
              >
                {t.viewCatalog}
              </Button>

              <div className="text-center pt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-navy hover:text-cyan transition-colors underline"
                >
                  {t.moreInfo}
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
