import { UserProvider } from "./UserContext";
import { PokemonProvider } from "./PokemonContext";

interface iProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvidersProps) => (
  <UserProvider>
    <PokemonProvider>{children}</PokemonProvider>
  </UserProvider>
);
