import CharacterCard from "@/components/character-card";
import { Counter } from "@/components/counter";
import Filter from "@/components/filter";
import Pagination from "@/components/pagination";
import CardWrapper from "@/components/wrappers/card-wrapper";
import { CharacterResponseType } from "@/types/common";
import { CharacterCardProps } from "@/types/props";
import { filterToParams } from "@/utils/filterToParams";
import { itemsToSet } from "@/utils/itemsToSet";

const getCharacters = async (
  filterQuery: string
): Promise<CharacterResponseType> => {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/" + filterQuery
  );
  const data = await res.json();
  return {
    characters: data?.results,
    pageCount: data?.info.pages,
  };
};

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const { characters, pageCount } = await getCharacters(
    filterToParams(searchParams)
  );

  const statuses = itemsToSet<CharacterCardProps>(characters)("status");
  const genders = itemsToSet<CharacterCardProps>(characters)("gender");

  return (
    <div>
      <Filter
        filters={[
          { label: "status", values: statuses },
          { label: "gender", values: genders },
        ]}
      />
      <Pagination
        pageCount={pageCount}
        currentPage={parseInt(searchParams.page, 10) ?? 1}
      />
      <Counter count={characters.length} />
      <CardWrapper>
        {characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </CardWrapper>
    </div>
  );
}
