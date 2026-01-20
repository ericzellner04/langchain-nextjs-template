import { ChatWindow } from "@/components/ChatWindow";
import { GuideInfoBox } from "@/components/guide/GuideInfoBox";

export default function Home() {
  const InfoCard = (
    <GuideInfoBox>
      <ul>
  <li className="text-xl font-bold">
    👕 Produktionsplattform für Modemarken
  </li>

  <li>
    <span className="ml-2">
      Finde passende Produktionen für deine eigene Marke
    </span>
  </li>

  <li>
    <span className="ml-2">
      Fabriken können sich selbst eintragen oder von mir eingetragen werden
    </span>
  </li>

  <li>
    <span className="ml-2">
      Filter nach Land, Preis, Kategorie & Mindestmenge
    </span>
  </li>

  <li>
    <span className="ml-2">
      Chatte direkt mit Produktionen
    </span>
  </li>

  <li>
    <span className="ml-2">
      Komplett kostenlos für den Start
    </span>
  </li>
</ul>

    </GuideInfoBox>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🏴‍☠️"
      placeholder="I'm an LLM pretending to be a pirate! Ask me about the pirate life!"
      emptyStateComponent={InfoCard}
    />
  );
}
