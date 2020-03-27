export interface ICreate {
    Id?: number;
    FieldTypeId: number;
    CategoryId: number;
    FieldGroupId: number;
    Name: string;
    Description: string;
    Position: number;
    IsFilter: boolean;
    IsRequired: boolean;
    IsOnProductDetails: boolean;
    IsStockKeepingUnit: boolean;
    IsActive: boolean;
    IsTopMenuLinkActive: boolean;
    IsSideMenuLinkActive: boolean;
    DefaultValue: string;
}
export interface IValue {
    FieldId: number;
    Name: string;
    Text: string;
    IsActive: boolean;
    Position: number;
}
export interface IGroup {
    Id?: number;
    CategoryId: number;
    Name: string;
    Position: number;
}
export interface IField {
    Name: string;
    CategoryId: number;
    FieldId: number;
    IsActive: boolean;
    IsRequired: boolean;
    FieldTypeId: number;
    FieldValueId: number;
    Description: string;
    IsStockKeepingUnit: boolean;
    IsFilter: boolean;
    IsOnProductDetails: boolean;
    Position: number;
    IsWizard: boolean;
    IsTopMenuLinkActive: boolean;
    IsSideMenuLinkActive: boolean;
    DefaultValue: string;
    FieldGroupId: number;
    FieldGroupName: string;
}
export interface IFieldValue {
    FieldValueId?: number;
    FieldId: number;
    Name: string;
    Text: string;
    IsActive: boolean;
    Position: number;
}
declare const _default: (request: any) => {
    /**
     *
     * @param {Number} page select which page is requested
     * @param {Number} perPage select quantity per page
     */
    getByCategoryId: (categoryId: number) => Promise<any>;
    getTreeByCategoryId: (categoryId: number) => Promise<any>;
    getByFieldId: (fieldId: number) => Promise<any>;
    getByFieldValue: (fieldValueId: number) => Promise<any>;
    getByGroup: (groupId: number) => Promise<any>;
    listGroupByCategory: (categoryId: number) => Promise<any>;
    /**
     *
     * @param {Object} body teste
     */
    create: (values: ICreate) => Promise<ICreate>;
    insertValue: (values: IValue) => Promise<IValue>;
    /**
     *
     * @param {Number} CategoryId Category reference to create a group
     * @param {String} Name Name of Group
     * @param {Number} Position The current Specification Group’s position in comparison to the others
     */
    insertGroup: (values: IGroup) => Promise<IGroup>;
    /**
     *
     * @param {Object} body object with params required to create a new Field
     */
    createField: (values: IField) => Promise<IField>;
    /**
     *
     * @param {Number} FieldId Specification Field Id *required
     * @param {String} Name Specification Field Value Name *required
     * @param {String} Text Specification Field Value Description *required
     * @param {Boolean} IsActive If the Specification Field Value is active *required
     * @param {Number} Position Specification Field Value Position *required
     */
    createFieldValue: (values: IFieldValue) => Promise<IFieldValue>;
    /**
     *
     * @param {Number} CategoryId Category ID *required
     * @param {String} Name Specification Group Name *required
     */
    createGroup: (CategoryId: number, Name: string) => Promise<IGroup>;
    updatedField: (values: IField) => Promise<IField>;
    /**
    *
    * @param {Number} FieldId Specification Field Id *required
    * @param {String} Name Specification Field Value Name *required
    * @param {String} Text Specification Field Value Description *required
    * @param {Boolean} IsActive If the Specification Field Value is active *required
    * @param {Number} Position Specification Field Value Position *required
    */
    updatedFieldValue: (values: IValue) => Promise<IValue>;
    /**
     *
     * @param {Number} Id Specification Group ID *required
     * @param {String} Name Specification Group Name *required
     */
    updateGroup: (Id: number, Name: string) => Promise<IGroup>;
};
/**
 *
 * @param {AxiosInstance} request AxiosInstance with configured headers
 */
export default _default;
