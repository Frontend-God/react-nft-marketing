import Box from "./common/Box";
import Flex from "./common/Flex";
import Image from "./common/Image";

const Service = ({
  icon,
  title,
  desc,
  index,
}: {
  icon: any;
  title: string;
  desc: string;
  index: number;
}) => {
  return (
    <Box cssClasses={["col-md-6", "col-lg-3", "p-3", "text-center"]}>
      <div data-aos="flip-left" data-aos-delay={(index + 1) * 100}>
        <Box cssClasses={["border-gradient", "service", "bg-5", "border-r-20"]}>
          <Image
            cssClasses={["bg-4", "py-3", "px-4", "border-r-20", "service-icon"]}
            src={icon}
          />
          <p className="font-size-md-1 mt-4">{title}</p>
          <p className="font-size-sm-1 opacity-color">{desc}</p>
          <Flex direction="row" justifyContent="center">
            <Box cssClasses={["service-learnmore", "opacity-color", "mt-4"]}>
              Learn More
            </Box>
          </Flex>
        </Box>
      </div>
    </Box>
  );
};

export default Service;
