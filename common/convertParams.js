import filterList from '@/sampleData/filterList.json';

const convertParams = {
  getFilterObjById: (filterKey, choiceId) => {
    const preSelectedFilters = filterList.find(filter => filter.key === filterKey)
    if (preSelectedFilters) {
      const selected = preSelectedFilters.choices.find(choice => choice.id === choiceId)
      return selected;
    }
    return null;
  },

  parseFromParams: (params) => {
    const parsedPreselect = {};
    Object.entries(params).map(([key, value]) => {
      const ids = value.split(',').map(id => id.trim());
      const choices = ids.map(id => convertParams.getFilterObjById(key, id));
      parsedPreselect[key] = choices;
    })
    return parsedPreselect;
  },

  parseToParams: (filters) => {
    const params = [];
    const selectedFilters = Object.entries(filters)
    for (let i = 0; i < selectedFilters.length; i++) {
      if (selectedFilters[i][1].length > 0) {
        const filterIdList = selectedFilters[i][1].map(item => item?.id)
        selectedFilters[i].splice(1, 1, filterIdList)
        params.push(selectedFilters[i].join('='))
      }
    }
    return params.join('&')
  }
}

export default convertParams;