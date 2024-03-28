import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
} from "@/components/ui/accordion"

interface props {
      answer: string,
      question: string,
}

const AccrodianCustomItem = ({ answer, question }: props) => {

      return (
            <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                        <AccordionTrigger>{question}</AccordionTrigger>
                        <AccordionContent>
                              {answer}
                        </AccordionContent>
                  </AccordionItem>
                 
            </Accordion>

      )
}
export default AccrodianCustomItem;