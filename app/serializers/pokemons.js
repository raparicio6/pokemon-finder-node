exports.formatPokemon = ({ id, name, base_experience, weight, height, sprites }) => ({
  pokemon: {
    id,
    name,
    weight,
    height,
    baseExperience: base_experience,
    imageUrl: sprites.front_default
  }
});
