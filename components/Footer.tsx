function Footer() {
  return (
    <footer className="flex fixed bottom-0 left-0 p-4 w-full justify-center bg-zinc-800">
      <p className="text-zinc-300">
        Opiniões reais de pessoas reais sobre um jogo que infelizmente também é real. Deixe sua
        opinião{" "}
        <a
          target="_blank"
          href="https://mepagaumcafe.com.br/gabecmelo/"
          className="text-yellow-300 underline cursor-pointer"
        >
          enviando uma mensagem
        </a>
        , ou me ajude a aliviar (ou aumentar) o meu ódio por LoL{" "}
        <a
          target="_blank"
          href="https://mepagaumcafe.com.br/gabecmelo/"
          className="text-yellow-300 underline cursor-pointer"
        >
          me pagando um café
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
