import Phone from "./phone.model";

const getAllPhonesFromDB = async () => {
  const phones = await Phone.find();
    if (!phones || phones.length === 0) {
        throw new Error("No phones found");
    }
  return phones;
};
const getSinglePhoneFromDB = async (id: string) => {
  const result = await Phone.findOne({ _id: id, isDeleted: false });
  if (!result) {
    throw new Error("Phone not found");
  }

  return result;
};

export const PhoneServices = {
  getAllPhonesFromDB,
  getSinglePhoneFromDB
};
