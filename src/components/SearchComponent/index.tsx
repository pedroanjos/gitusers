import { SearchContainer, SearchInput } from "./styles";

interface SearchComponentProps {
  search: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function SearchComponent(props: SearchComponentProps) {
  const { search, onChange, onKeyUp } = props;
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={search}
        onChange={onChange}
        onKeyUp={onKeyUp}
        placeholder="Pesquisar"
      ></SearchInput>
    </SearchContainer>
  );
}
