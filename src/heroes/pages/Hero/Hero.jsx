import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";
import { useMemo } from "react";
import { HeroPresentational } from "./HeroPresentational";

export const Hero = () => {
  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) return <Navigate to="/marvel" />;
  const getStringNavigate = hero?.id.split("-")[0];
  const navigateBack = useNavigate();
  return (
    <HeroPresentational
      getStringNavigate={getStringNavigate}
      navigateBack={navigateBack}
      hero={hero}
      id={id}
    />
  );
};
