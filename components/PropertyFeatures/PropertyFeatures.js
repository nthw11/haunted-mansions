import {
  faBath,
  faBed,
  faSquarePersonConfined,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import numeral from "numeral";

export const PropertyFeatures = ({
  hasParking,
  petFriendly,
  bedrooms,
  bathrooms,
  price,
}) => {
  return (
    <div className="max-w-lg mx-auto my-10 bg-white text-slate-900 p-5 text-center">
      <div className="grid grid-cols-2 mb-4 gap-y-5">
        <div>
          <FontAwesomeIcon icon={faBed} /> {bedrooms} bedrooms
        </div>
        <div>
          <FontAwesomeIcon icon={faBath} /> {bathrooms} bathrooms
        </div>
        {!!petFriendly && (
          <div>
            <FontAwesomeIcon icon={faSquarePersonConfined} /> Pet friendly
          </div>
        )}
        {!!hasParking && (
          <div>
            <FontAwesomeIcon icon={faCar} /> Parking available
          </div>
        )}
      </div>
      <h3 className="text-5xl font-bold">${numeral(price).format("0,0")}</h3>
    </div>
  );
};
