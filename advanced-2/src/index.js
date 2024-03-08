export default function attackOptions(character) {
    const finalArray = [];
  
    character.special.forEach((element) => {
      const {
        id,
        name,
        icon,
        description = 'Описание недоступно.',
      } = element;
      finalArray.push({
        id,
        name,
        icon,
        description,
      });
    });
  
    return finalArray;
  }