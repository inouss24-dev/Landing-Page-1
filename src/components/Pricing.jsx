const PRICING = [
  {
    id: 1,
    title: "BASIC PLAN ",
    price: "$10",
    time: "monthly",
    space: "2 GB SPACE",
    brandSpace: "200 GB Bandwidth",
    theme: "20 More Themes",
    lifeTime: "Lifetime Support",
    signUp: "SIGN UP",
  },
  {
    id: 2,
    title: "BUSINESS PLAN ",
    price: "$20",
    time: "monthly",
    space: "5 GB SPACE",
    brandSpace: "500 GB Bandwidth",
    theme: "50 More Themes",
    lifeTime: "Lifetime Support",
    signUp: "SIGN UP",
  },
  {
    id: 3,
    title: "PRO PLAN ",
    price: "$30",
    time: "monthly",
    space: "10 GB SPACE",
    brandSpace: "1000 GB Bandwidth",
    theme: "100 More Themes",
    lifeTime: "Lifetime Support",
    signUp: "SIGN UP",
  },
];

function Pricing() {
  return (
    <>
      <div className="bg-[#f8f8f8] py-7" id="PRICING">
        {/* Titre */}
        <h1 className="text-center text-4xl font-bold mb-8">OUR PRICING</h1>
        
        {/* Conteneur des cartes */}
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {PRICING.map((pricing) => (
            <div
              key={pricing.id}
              className="flex flex-col bg-white shadow-lg rounded-lg w-80"
            >
              {/* En-tête de la carte */}
              <div className="flex flex-col items-center bg-[#28a7e9] text-white py-4 gap-y-3 rounded-t-lg">
                <h1 className="text-2xl font-bold">{pricing.title}</h1>
                <h3 className="text-xl">{pricing.price}</h3>
                <span className="text-lg">{pricing.time}</span>
              </div>

              {/* Contenu de la carte */}
              <div className="flex flex-col items-center gap-y-3 py-6 px-4">
                <span className="text-lg">{pricing.space}</span>
                <span className="text-lg">{pricing.brandSpace}</span>
                <span className="text-lg">{pricing.theme}</span>
                <span className="text-lg">{pricing.lifeTime}</span>
                <a
                  href="#"
                  className="mt-4 bg-[#28a7e9] text-white px-6 py-2 rounded-md hover:bg-[#1e90d1] transition-all"
                >
                  {pricing.signUp}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pricing;
