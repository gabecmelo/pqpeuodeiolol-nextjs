import Link from "next/link";
import Image from "next/image";
import ifhLolicon from "./assets/IFHLOL.png";
import { helpers } from "./helpers/dbHelpers";
import Footer from '@/components/Footer';
const FrasesComponent = () => {
  const id = helpers.getRandomId();
  const ifhLoliconSrc = ifhLolicon.src as string;

  return (
    <div
      className="flex flex-col items-center justify-center h-screen gap-10 -mt-7"
    >
      <Link href={`/${id}`}>
        <Image
          className="cursor-pointer"
          width={400}
          height={400}
          src={ifhLoliconSrc}
          alt="Icone não permitido League of Legends"
        />
      </Link>
      <p className="text-lg">Clique no Ícone para receber uma opinião sincera.</p>
      <Footer />
    </div>
  );
};

export default FrasesComponent;
