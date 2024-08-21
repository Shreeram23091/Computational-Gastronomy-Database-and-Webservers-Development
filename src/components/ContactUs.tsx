// ContactUs.tsx
import React from "react";
import { Flex, Text } from "@sparrowengg/twigs-react";

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 mt-20"> {/* Added mt-20 for top margin */}
      <Flex className="flex w-full max-w-6xl" flexDirection="row" justifyContent="space-between">
        <Flex className="flex-1 flex flex-col items-start p-4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <Text className="mb-2"><strong>Prof. Ganesh Bagler</strong></Text>
          <Text className="mb-2">Infosys Centre for Artificial Intelligence</Text>
          <Text className="mb-2">Department of Computational Biology, IIIT-Delhi, New Delhi</Text>
          <Text className="mb-2"><a href="https://cosylab.iiitd.edu.in"> Complex Systems Laboratory</a></Text>
          <Text className="mb-2"><strong>Office:</strong> A305, R&D Block</Text>
          <Text className="mb-2">Indraprastha Institute of Information Technology Delhi (IIIT Delhi)</Text>
          <Text className="mb-2">Okhla Phase III, New Delhi, India 110020</Text>
          <Text className="mb-2"><strong>Email:</strong> <a href="mailto:bagler+sweetpred@iiitd.ac.in">bagler+sweetpred@iiitd.ac.in</a></Text>
          <Text className="mb-4"><strong>Tel:</strong> +91-11-26907-443 (Work)</Text>
        </Flex>
        <Flex className="flex-1 p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7009.5917896800065!2d77.273176!3d28.545854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564daac1d%3A0x2c582e340e7bc556!2sIndraprastha%20Institute%20of%20Information%20Technology%20Delhi!5e0!3m2!1sen!2sus!4v1722774438606!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default ContactUs;
