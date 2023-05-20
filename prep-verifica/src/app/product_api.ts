export interface Product_Api {
    count:      number;
    page:       string;
    page_count: number;
    page_size:  number;
    product:   Product;
    skip:       number;
}

export interface Product {
    _id:                                                                            string;
    _keywords:                                                                      string[];
    added_countries_tags:                                                           any[];
    additives_debug_tags:                                                           string[];
    additives_n:                                                                    number;
    additives_old_n:                                                                number;
    additives_old_tags:                                                             string[];
    additives_original_tags:                                                        string[];
    additives_prev_original_tags:                                                   string[];
    additives_tags:                                                                 string[];
    allergens:                                                                      string;
    allergens_from_ingredients:                                                     string;
    allergens_from_user:                                                            string;
    allergens_hierarchy:                                                            string[];
    allergens_lc:                                                                   string;
    allergens_tags:                                                                 string[];
    amino_acids_prev_tags:                                                          any[];
    amino_acids_tags:                                                               any[];
    brands:                                                                         string;
    brands_tags:                                                                    string[];
    carbon_footprint_from_known_ingredients_debug:                                  string;
    carbon_footprint_percent_of_known_ingredients:                                  number;
    categories:                                                                     string;
    categories_hierarchy:                                                           string[];
    categories_lc:                                                                  string;
    categories_old:                                                                 string;
    categories_properties:                                                          CategoriesProperties;
    categories_properties_tags:                                                     string[];
    categories_tags:                                                                string[];
    category_properties:                                                            CategoryProperties;
    checked:                                                                        string;
    checkers_tags:                                                                  string[];
    ciqual_food_name_tags:                                                          string[];
    cities_tags:                                                                    any[];
    code:                                                                           string;
    codes_tags:                                                                     string[];
    compared_to_category:                                                           string;
    complete:                                                                       number;
    completeness:                                                                   string;
    correctors_tags:                                                                string[];
    countries:                                                                      string;
    countries_beforescanbot:                                                        string;
    countries_hierarchy:                                                            string[];
    countries_lc:                                                                   string;
    countries_tags:                                                                 string[];
    created_t:                                                                      number;
    creator:                                                                        string;
    data_quality_bugs_tags:                                                         any[];
    data_quality_errors_tags:                                                       any[];
    data_quality_info_tags:                                                         string[];
    data_quality_tags:                                                              string[];
    data_quality_warnings_tags:                                                     string[];
    data_sources:                                                                   string;
    data_sources_tags:                                                              string[];
    debug_param_sorted_langs:                                                       string[];
    debug_tags?:                                                                    string[];
    ecoscore_data:                                                                  EcoscoreData;
    ecoscore_extended_data:                                                         EcoscoreExtendedData;
    ecoscore_extended_data_version:                                                 string;
    ecoscore_grade:                                                                 EcoscoreGrade;
    ecoscore_score:                                                                 number;
    ecoscore_tags:                                                                  EcoscoreGrade[];
    editors:                                                                        string[];
    editors_tags:                                                                   string[];
    emb_codes:                                                                      string;
    emb_codes_20141016:                                                             string;
    emb_codes_orig:                                                                 string;
    emb_codes_tags:                                                                 any[];
    entry_dates_tags:                                                               string[];
    environment_impact_level:                                                       string;
    environment_impact_level_tags:                                                  any[];
    expiration_date:                                                                string;
    food_groups:                                                                    string;
    food_groups_tags:                                                               string[];
    "fruits-vegetables-nuts_100g_estimate":                                         number;
    generic_name:                                                                   string;
    generic_name_en:                                                                string;
    generic_name_fr:                                                                string;
    grades:                                                                         Grades;
    id:                                                                             string;
    image_front_small_url:                                                          string;
    image_front_thumb_url:                                                          string;
    image_front_url:                                                                string;
    image_ingredients_small_url:                                                    string;
    image_ingredients_thumb_url:                                                    string;
    image_ingredients_url:                                                          string;
    image_nutrition_small_url?:                                                     string;
    image_nutrition_thumb_url?:                                                     string;
    image_nutrition_url?:                                                           string;
    image_small_url:                                                                string;
    image_thumb_url:                                                                string;
    image_url:                                                                      string;
    images:                                                                         Images;
    informers_tags:                                                                 string[];
    ingredients:                                                                    Ingredient[];
    ingredients_analysis:                                                           IngredientsAnalysis;
    ingredients_analysis_tags:                                                      string[];
    ingredients_debug:                                                              Array<null | string>;
    ingredients_from_or_that_may_be_from_palm_oil_n:                                number;
    ingredients_from_palm_oil_n:                                                    number;
    ingredients_from_palm_oil_tags:                                                 any[];
    ingredients_hierarchy:                                                          string[];
    ingredients_ids_debug:                                                          string[];
    ingredients_n:                                                                  number;
    ingredients_n_tags:                                                             string[];
    ingredients_original_tags:                                                      string[];
    ingredients_percent_analysis:                                                   number;
    ingredients_tags:                                                               string[];
    ingredients_text:                                                               string;
    ingredients_text_debug:                                                         string;
    ingredients_text_en:                                                            string;
    ingredients_text_fr:                                                            string;
    ingredients_text_with_allergens:                                                string;
    ingredients_text_with_allergens_en:                                             string;
    ingredients_text_with_allergens_fr:                                             string;
    ingredients_that_may_be_from_palm_oil_n:                                        number;
    ingredients_that_may_be_from_palm_oil_tags:                                     any[];
    ingredients_with_specified_percent_n:                                           number;
    ingredients_with_specified_percent_sum:                                         number;
    ingredients_with_unspecified_percent_n:                                         number;
    ingredients_with_unspecified_percent_sum:                                       number | string;
    interface_version_created:                                                      string;
    interface_version_modified:                                                     string;
    known_ingredients_n:                                                            number;
    labels:                                                                         string;
    labels_hierarchy:                                                               string[];
    labels_lc:                                                                      string;
    labels_old:                                                                     string;
    labels_tags:                                                                    string[];
    lang:                                                                           string;
    languages:                                                                      { [key: string]: number };
    languages_codes:                                                                LanguagesCodes;
    languages_hierarchy:                                                            string[];
    languages_tags:                                                                 string[];
    last_check_dates_tags:                                                          string[];
    last_checked_t:                                                                 number;
    last_checker:                                                                   string;
    last_edit_dates_tags:                                                           string[];
    last_editor:                                                                    string;
    last_image_dates_tags:                                                          string[];
    last_image_t:                                                                   number;
    last_modified_by:                                                               string;
    last_modified_t:                                                                number;
    lc:                                                                             string;
    link:                                                                           string;
    main_countries_tags:                                                            any[];
    manufacturing_places:                                                           string;
    manufacturing_places_tags:                                                      any[];
    max_imgid:                                                                      string;
    minerals_prev_tags:                                                             any[];
    minerals_tags:                                                                  any[];
    misc_tags:                                                                      string[];
    new_additives_n:                                                                number;
    no_nutrition_data:                                                              string;
    nova_group:                                                                     number;
    nova_group_debug:                                                               string;
    nova_groups:                                                                    string;
    nova_groups_markers:                                                            { [key: string]: Array<string[]> };
    nova_groups_tags:                                                               string[];
    nucleotides_prev_tags:                                                          any[];
    nucleotides_tags:                                                               any[];
    nutrient_levels:                                                                NutrientLevels;
    nutrient_levels_tags:                                                           string[];
    nutriments:                                                                     Nutriments;
    nutriscore_data:                                                                NutriscoreData;
    nutriscore_grade:                                                               string;
    nutriscore_score:                                                               number;
    nutriscore_score_opposite:                                                      number;
    nutrition_data:                                                                 string;
    nutrition_data_per:                                                             string;
    nutrition_data_prepared:                                                        string;
    nutrition_data_prepared_per:                                                    string;
    nutrition_grade_fr:                                                             string;
    nutrition_grades:                                                               string;
    nutrition_grades_tags:                                                          string[];
    nutrition_score_beverage:                                                       number;
    nutrition_score_debug:                                                          string;
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients:       number;
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: number;
    obsolete:                                                                       string;
    obsolete_since_date:                                                            string;
    origin_en:                                                                      string;
    origin_fr:                                                                      string;
    origins:                                                                        string;
    origins_hierarchy:                                                              any[];
    origins_lc:                                                                     string;
    origins_old:                                                                    string;
    origins_tags:                                                                   any[];
    other_nutritional_substances_tags:                                              any[];
    packaging:                                                                      string;
    packaging_hierarchy:                                                            string[];
    packaging_lc:                                                                   string;
    packaging_materials_tags:                                                       string[];
    packaging_old:                                                                  string;
    packaging_old_before_taxonomization:                                            string;
    packaging_recycling_tags:                                                       any[];
    packaging_shapes_tags:                                                          string[];
    packaging_tags:                                                                 string[];
    packaging_text_en:                                                              string;
    packaging_text_fr:                                                              string;
    packagings:                                                                     ProductPackaging[];
    photographers_tags:                                                             string[];
    pnns_groups_1:                                                                  string;
    pnns_groups_1_tags:                                                             string[];
    pnns_groups_2:                                                                  string;
    pnns_groups_2_tags:                                                             string[];
    popularity_key:                                                                 string;
    popularity_tags:                                                                string[];
    product_name:                                                                   string;
    product_name_en:                                                                string;
    product_name_fr:                                                                string;
    product_quantity:                                                               number | string;
    purchase_places:                                                                string;
    purchase_places_tags:                                                           string[];
    quantity:                                                                       string;
    removed_countries_tags:                                                         any[];
    rev:                                                                            number;
    scans_n:                                                                        number;
    scores:                                                                         Grades;
    selected_images:                                                                SelectedImages;
    serving_quantity?:                                                              string;
    serving_size:                                                                   string;
    sortkey:                                                                        number;
    sources:                                                                        Source[];
    states:                                                                         string;
    states_hierarchy:                                                               string[];
    states_tags:                                                                    string[];
    stores:                                                                         string;
    stores_tags:                                                                    string[];
    teams:                                                                          string;
    teams_tags:                                                                     string[];
    traces:                                                                         string;
    traces_from_ingredients:                                                        string;
    traces_from_user:                                                               string;
    traces_hierarchy:                                                               string[];
    traces_lc:                                                                      string;
    traces_tags:                                                                    string[];
    unique_scans_n:                                                                 number;
    unknown_ingredients_n:                                                          number;
    unknown_nutrients_tags:                                                         any[];
    update_key:                                                                     string;
    url:                                                                            string;
    vitamins_prev_tags:                                                             any[];
    vitamins_tags:                                                                  any[];
    generic_name_da?:                                                               string;
    generic_name_de?:                                                               string;
    generic_name_el?:                                                               string;
    generic_name_es?:                                                               string;
    generic_name_fi?:                                                               string;
    generic_name_it?:                                                               string;
    generic_name_nl?:                                                               string;
    generic_name_no?:                                                               string;
    generic_name_pt?:                                                               string;
    generic_name_sv?:                                                               string;
    ingredients_text_da?:                                                           string;
    ingredients_text_de?:                                                           string;
    ingredients_text_el?:                                                           string;
    ingredients_text_es?:                                                           string;
    ingredients_text_fi?:                                                           string;
    ingredients_text_it?:                                                           string;
    ingredients_text_nb?:                                                           string;
    ingredients_text_nl?:                                                           string;
    ingredients_text_no?:                                                           string;
    ingredients_text_pt?:                                                           string;
    ingredients_text_sv?:                                                           string;
    ingredients_text_with_allergens_da?:                                            string;
    ingredients_text_with_allergens_de?:                                            string;
    ingredients_text_with_allergens_el?:                                            string;
    ingredients_text_with_allergens_es?:                                            string;
    ingredients_text_with_allergens_fi?:                                            string;
    ingredients_text_with_allergens_nb?:                                            string;
    ingredients_text_with_allergens_nl?:                                            string;
    ingredients_text_with_allergens_no?:                                            string;
    ingredients_text_with_allergens_pt?:                                            string;
    ingredients_text_with_allergens_sv?:                                            string;
    origin_da?:                                                                     string;
    origin_de?:                                                                     string;
    origin_el?:                                                                     string;
    origin_es?:                                                                     string;
    origin_fi?:                                                                     string;
    origin_nl?:                                                                     string;
    origin_no?:                                                                     string;
    origin_pt?:                                                                     string;
    origin_sv?:                                                                     string;
    packaging_text_da?:                                                             string;
    packaging_text_de?:                                                             string;
    packaging_text_el?:                                                             string;
    packaging_text_es?:                                                             string;
    packaging_text_fi?:                                                             string;
    packaging_text_nl?:                                                             string;
    packaging_text_no?:                                                             string;
    packaging_text_pt?:                                                             string;
    packaging_text_sv?:                                                             string;
    packagings_complete?:                                                           number;
    product_name_da?:                                                               string;
    product_name_de?:                                                               string;
    product_name_el?:                                                               string;
    product_name_es?:                                                               string;
    product_name_fi?:                                                               string;
    product_name_it?:                                                               string;
    product_name_nl?:                                                               string;
    product_name_no?:                                                               string;
    product_name_pt?:                                                               string;
    product_name_sv?:                                                               string;
    weighers_tags?:                                                                 any[];
}

export interface CategoriesProperties {
    "agribalyse_food_code:en": string;
    "ciqual_food_code:en":     string;
}

export interface CategoryProperties {
    "ciqual_food_name:en"?: string;
    "ciqual_food_name:fr"?: string;
}

export interface EcoscoreData {
    adjustments:          Adjustments;
    agribalyse:           Agribalyse;
    grade:                EcoscoreGrade;
    grades:               { [key: string]: EcoscoreGrade };
    missing:              Missing;
    missing_data_warning: number;
    previous_data:        PreviousData;
    score:                number;
    scores:               { [key: string]: number };
    status:               string;
}

export interface Adjustments {
    origins_of_ingredients: OriginsOfIngredients;
    packaging:              AdjustmentsPackaging;
    production_system:      ProductionSystem;
    threatened_species:     Grades;
}

export interface OriginsOfIngredients {
    aggregated_origins:         AggregatedOrigin[];
    epi_score:                  number;
    epi_value:                  number;
    origins_from_origins_field: string[];
    transportation_score:       number;
    transportation_scores:      { [key: string]: number };
    transportation_value:       number;
    transportation_values:      { [key: string]: number };
    value:                      number;
    values:                     { [key: string]: number };
    warning:                    string;
}

export interface AggregatedOrigin {
    epi_score:            string;
    origin:               string;
    percent:              number;
    transportation_score: null;
}

export interface AdjustmentsPackaging {
    non_recyclable_and_non_biodegradable_materials: number;
    packagings:                                     PackagingPackaging[];
    score:                                          number;
    value:                                          number;
    warning?:                                       string;
}

export interface PackagingPackaging {
    ecoscore_material_score:               number;
    ecoscore_shape_ratio:                  number | string;
    material:                              string;
    non_recyclable_and_non_biodegradable?: FromPalmOil;
    shape:                                 string;
}

export enum FromPalmOil {
    Maybe = "maybe",
    No = "no",
    Yes = "yes",
}

export interface ProductionSystem {
    labels:  any[];
    value:   number;
    warning: string;
}

export interface Grades {
}

export interface Agribalyse {
    agribalyse_food_code: string;
    co2_agriculture:      string;
    co2_consumption:      string;
    co2_distribution:     string;
    co2_packaging:        string;
    co2_processing:       string;
    co2_total:            string;
    co2_transportation:   string;
    code:                 string;
    dqr:                  string;
    ef_agriculture:       string;
    ef_consumption:       string;
    ef_distribution:      string;
    ef_packaging:         string;
    ef_processing:        string;
    ef_total:             string;
    ef_transportation:    string;
    is_beverage:          number;
    name_en:              string;
    name_fr:              string;
    score:                number;
    version?:             string;
}

export enum EcoscoreGrade {
    C = "c",
}

export interface Missing {
    labels:      number;
    origins:     number;
    packagings?: number;
}

export interface PreviousData {
    agribalyse: Agribalyse;
    grade:      EcoscoreGrade;
    score:      number;
}

export interface EcoscoreExtendedData {
    impact: Impact;
}

export interface Impact {
    ef_single_score_log_stddev:                  string;
    likeliest_impacts:                           LikeliestImpacts;
    likeliest_recipe:                            LikeliestRecipe;
    mass_ratio_uncharacterized:                  string;
    uncharacterized_ingredients:                 UncharacterizedIngredients;
    uncharacterized_ingredients_mass_proportion: UncharacterizedIngredientsMassProportionClass;
    uncharacterized_ingredients_ratio:           UncharacterizedIngredientsMassProportionClass;
    warnings:                                    string[];
}

export interface LikeliestImpacts {
    Climate_change:  string;
    EF_single_score: string;
}

export interface LikeliestRecipe {
    "en:baker_s_yeast":       string;
    "en:corn_starch"?:        string;
    "en:crushed_tomato"?:     string;
    "en:dextrose"?:           string;
    "en:e250"?:               string;
    "en:e316"?:               number;
    "en:e451"?:               string;
    "en:ferment"?:            string;
    "en:gelling_agent"?:      string;
    "en:glucose_syrup"?:      string;
    "en:ham"?:                string;
    "en:herb"?:               number;
    "en:lactose"?:            string;
    "en:malted_wheat_flour"?: string;
    "en:natural_flavouring"?: number;
    "en:rocket"?:             string;
    "en:salt":                string;
    "en:water":               string;
    "en:wheat_flour":         string;
    "fr:fond_de_porc"?:       number;
    "fr:mozzarella"?:         string;
    "en:bell_pepper"?:        string;
    "en:cherry_tomato"?:      string;
    "en:chili_pepper"?:       string;
    "en:e300"?:               string;
    "en:e330"?:               string;
    "en:edam"?:               string;
    "en:garlic"?:             string;
    "en:lemon_juice"?:        string;
    "en:mozzarella"?:         string;
    "en:olives"?:             string;
    "en:onion"?:              string;
    "en:oregano"?:            string;
    "en:paprika"?:            string;
    "en:parsley"?:            string;
    "en:pepper"?:             string;
    "en:rapeseed_oil"?:       string;
    "en:sour_cream"?:         string;
    "en:spice_extract"?:      string;
    "en:sugar"?:              string;
    "en:tomato_concentrate"?: string;
    "en:tomato_puree"?:       string;
    "en:white_vinegar"?:      string;
}

export interface UncharacterizedIngredients {
    impact:    string[];
    nutrition: string[];
}

export interface UncharacterizedIngredientsMassProportionClass {
    impact:    string;
    nutrition: string;
}

export interface Images {
    "1":             The1;
    "10":            The1;
    "11":            The1;
    "12":            The1;
    "13":            The1;
    "14":            The1;
    "15":            The1;
    "16":            The16;
    "17":            The16;
    "18":            The16;
    "19":            The16;
    "2":             The2;
    "20":            The16;
    "21":            The16;
    "22":            The16;
    "23":            The16;
    "24":            The1;
    "25":            The1;
    "26":            The16;
    "27":            The16;
    "28":            The16;
    "3":             The2;
    "30":            The16;
    "31":            The16;
    "32":            The16;
    "4":             The2;
    "5":             The2;
    "6":             The1;
    "7":             The1;
    "8":             The1;
    "9":             The1;
    front:           IngredientsClass;
    front_en:        Front;
    front_fr:        Front;
    ingredients?:    IngredientsClass;
    ingredients_fr:  FrontEs;
    nutrition?:      IngredientsClass;
    nutrition_fr:    FrontEs;
    "29"?:           The16;
    "33"?:           The16;
    "34"?:           The16;
    "35"?:           The16;
    "36"?:           The16;
    "37"?:           The16;
    "38"?:           The16;
    "39"?:           The16;
    "40"?:           The16;
    "41"?:           The16;
    "42"?:           The16;
    "43"?:           The16;
    "44"?:           The16;
    "45"?:           The16;
    "46"?:           The16;
    "47"?:           The16;
    "48"?:           The16;
    "49"?:           The16;
    "50"?:           The16;
    "51"?:           The16;
    "52"?:           The16;
    "53"?:           The16;
    "54"?:           The16;
    front_es?:       FrontEs;
    ingredients_da?: Ingredients;
    ingredients_de?: Ingredients;
    ingredients_el?: Ingredients;
    ingredients_en?: Ingredients;
    ingredients_es?: Ingredients;
    ingredients_fi?: Ingredients;
    ingredients_nl?: Ingredients;
    ingredients_no?: Ingredients;
    ingredients_pt?: Ingredients;
    ingredients_sv?: Ingredients;
    packaging_de?:   FrontEs;
    packaging_fr?:   FrontEs;
}

export interface The1 {
    sizes:      Sizes;
    uploaded_t: number | string;
    uploader:   string;
}

export interface Sizes {
    "100":  The100;
    "400":  The100;
    full:   The100;
    "200"?: The100;
}

export interface The100 {
    h: number;
    w: number;
}

export interface The16 {
    sizes:      Sizes;
    uploaded_t: number;
    uploader:   string;
}

export interface The2 {
    sizes:      Sizes;
    uploaded_t: string;
    uploader:   string;
}

export interface IngredientsClass {
    geometry:    string;
    imgid:       string;
    normalize:   null | string;
    rev:         string;
    sizes:       Sizes;
    white_magic: null | string;
}

export interface Front {
    angle:                  number | string;
    coordinates_image_size: string;
    geometry:               string;
    imgid:                  string;
    normalize:              null | string;
    rev:                    string;
    sizes:                  Sizes;
    white_magic:            null | string;
    x1:                     string;
    x2:                     string;
    y1:                     string;
    y2:                     string;
}

export interface FrontEs {
    angle:                   string;
    coordinates_image_size?: string;
    geometry:                string;
    imgid:                   string;
    normalize:               string;
    rev:                     string;
    sizes:                   Sizes;
    white_magic:             string;
    x1:                      string;
    x2:                      string;
    y1:                      string;
    y2:                      string;
    ocr?:                    number;
    orientation?:            string;
}

export interface Ingredients {
    angle:                   number;
    geometry:                Geometry;
    imgid:                   string;
    normalize:               null;
    rev:                     string;
    sizes:                   Sizes;
    white_magic:             null;
    x1:                      string;
    x2:                      string;
    y1:                      string;
    y2:                      string;
    coordinates_image_size?: string;
}

export enum Geometry {
    The0X011 = "0x0--1--1",
}

export interface Ingredient {
    has_sub_ingredients?: FromPalmOil;
    id:                   string;
    percent_estimate:     number | string;
    percent_max:          number | string;
    percent_min:          number | string;
    rank?:                number;
    text:                 string;
    vegan?:               FromPalmOil;
    vegetarian?:          FromPalmOil;
    percent?:             number;
    from_palm_oil?:       FromPalmOil;
}

export interface IngredientsAnalysis {
    "en:non-vegan":                 string[];
    "en:non-vegetarian"?:           string[];
    "en:palm-oil-content-unknown":  string[];
    "en:vegan-status-unknown":      string[];
    "en:vegetarian-status-unknown": string[];
}

export interface LanguagesCodes {
    en:  number;
    fr:  number;
    da?: number;
    de?: number;
    el?: number;
    es?: number;
    fi?: number;
    nb?: number;
    nl?: number;
    no?: number;
    pt?: number;
    sv?: number;
}

export interface NutrientLevels {
    fat:             string;
    salt:            string;
    "saturated-fat": string;
    sugars:          string;
}

export interface Nutriments {
    carbohydrates:                                              number;
    carbohydrates_100g:                                         number;
    carbohydrates_serving?:                                     number;
    carbohydrates_unit:                                         string;
    carbohydrates_value:                                        number;
    "carbon-footprint-from-known-ingredients_100g":             string;
    "carbon-footprint-from-known-ingredients_product":          number;
    "carbon-footprint-from-known-ingredients_serving":          number | string;
    energy:                                                     number;
    "energy-kcal":                                              number;
    "energy-kcal_100g":                                         number;
    "energy-kcal_serving"?:                                     number;
    "energy-kcal_unit":                                         string;
    "energy-kcal_value":                                        number;
    "energy-kcal_value_computed":                               string;
    "energy-kj":                                                number;
    "energy-kj_100g":                                           number;
    "energy-kj_serving"?:                                       number;
    "energy-kj_unit":                                           string;
    "energy-kj_value":                                          number;
    "energy-kj_value_computed":                                 string;
    energy_100g:                                                number;
    energy_serving?:                                            number;
    energy_unit:                                                string;
    energy_value:                                               number;
    fat:                                                        string;
    fat_100g:                                                   string;
    fat_serving?:                                               string;
    fat_unit:                                                   string;
    fat_value:                                                  string;
    fiber:                                                      number | string;
    fiber_100g:                                                 number | string;
    fiber_serving?:                                             string;
    fiber_unit:                                                 string;
    fiber_value:                                                number | string;
    "fruits-vegetables-nuts-estimate-from-ingredients_100g":    number;
    "fruits-vegetables-nuts-estimate-from-ingredients_serving": number;
    "nova-group":                                               number;
    "nova-group_100g":                                          number;
    "nova-group_serving":                                       number;
    "nutrition-score-fr":                                       number;
    "nutrition-score-fr_100g":                                  number;
    proteins:                                                   number | string;
    proteins_100g:                                              number | string;
    proteins_serving?:                                          number;
    proteins_unit:                                              string;
    proteins_value:                                             number | string;
    salt:                                                       string;
    salt_100g:                                                  string;
    salt_serving?:                                              number;
    salt_unit:                                                  string;
    salt_value:                                                 string;
    "saturated-fat":                                            string;
    "saturated-fat_100g":                                       string;
    "saturated-fat_serving"?:                                   string;
    "saturated-fat_unit":                                       string;
    "saturated-fat_value":                                      string;
    sodium:                                                     string;
    sodium_100g:                                                string;
    sodium_serving?:                                            string;
    sodium_unit:                                                string;
    sodium_value:                                               string;
    sugars:                                                     string;
    sugars_100g:                                                string;
    sugars_serving?:                                            string;
    sugars_unit:                                                string;
    sugars_value:                                               string;
}

export interface NutriscoreData {
    energy:                                                number;
    energy_points:                                         number;
    energy_value:                                          number;
    fiber:                                                 number | string;
    fiber_points:                                          number;
    fiber_value:                                           number | string;
    fruits_vegetables_nuts_colza_walnut_olive_oils:        number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_value:  number;
    grade:                                                 string;
    is_beverage:                                           number;
    is_cheese:                                             number;
    is_fat:                                                number;
    is_water:                                              number;
    negative_points:                                       number;
    positive_points:                                       number;
    proteins:                                              number | string;
    proteins_points:                                       number;
    proteins_value:                                        number | string;
    saturated_fat:                                         string;
    saturated_fat_points:                                  number;
    saturated_fat_ratio:                                   string;
    saturated_fat_ratio_points:                            number;
    saturated_fat_ratio_value:                             number | string;
    saturated_fat_value:                                   string;
    score:                                                 number;
    sodium:                                                number;
    sodium_points:                                         number;
    sodium_value:                                          number;
    sugars:                                                string;
    sugars_points:                                         number;
    sugars_value:                                          string;
}

export interface ProductPackaging {
    material?: string;
    shape:     string;
}

export interface SelectedImages {
    front:       SelectedImagesFront;
    ingredients: SelectedImagesIngredients;
    nutrition:   Nutrition;
    packaging?:  SelectedImagesPackaging;
}

export interface SelectedImagesFront {
    display: FrontDisplay;
    small:   FrontDisplay;
    thumb:   FrontDisplay;
}

export interface FrontDisplay {
    en:  string;
    fr:  string;
    es?: string;
}

export interface SelectedImagesIngredients {
    display: IngredientsDisplay;
    small:   IngredientsDisplay;
    thumb:   IngredientsDisplay;
}

export interface IngredientsDisplay {
    fr:  string;
    da?: string;
    de?: string;
    el?: string;
    en?: string;
    es?: string;
    fi?: string;
    nl?: string;
    no?: string;
    pt?: string;
    sv?: string;
}

export interface Nutrition {
    display: NutritionDisplay;
    small:   NutritionDisplay;
    thumb:   NutritionDisplay;
}

export interface NutritionDisplay {
    fr: string;
}

export interface SelectedImagesPackaging {
    display: PackagingDisplay;
    small:   PackagingDisplay;
    thumb:   PackagingDisplay;
}

export interface PackagingDisplay {
    de: string;
    fr: string;
}

export interface Source {
    fields:        string[];
    id:            string;
    images:        string[];
    import_t:      number;
    manufacturer?: number;
    name?:         string;
    url:           string;
}