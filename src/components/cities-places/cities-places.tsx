import { useAppSelector } from '../../hooks/use-store';
import {ListOffers} from '../list-offers/list-offers';
import {SortList} from '../sort-list/sort-list';


function CitiesPlaceComponent () {
  const offersSort = useAppSelector((state) => state.sortOffers.sortOffers);
  const offersFilter = useAppSelector((state) => state.filterOffers.filterOffers);
  const selectedFilterCity = useAppSelector((state) => state.filterCity.city);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">{`${offersFilter?.length === 1 ? 'Place' : 'Places'}`} </h2>
      <b className="places__found"> {offersFilter?.length} {`${offersFilter?.length === 1 ? 'Place' : 'Places'}`} to stay in {selectedFilterCity}</b>
      <SortList/>
      <ListOffers offers = {offersSort}/>
    </section>
  );
}

export {CitiesPlaceComponent};
