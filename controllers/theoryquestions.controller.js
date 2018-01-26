var questions = {
    getTheoryQuestions: function (req, res, next) {
        let practiceTestName = req.query.name;
        let questionJson = {
            practiceTest1: {
                q1: {
                    text: "What is the scope of the term ‘supply’ as defined in the CGST Act, 2017?",
                    ans: "As per Section 7(1) of the CGST Act, 2017, Supply includes:1. all forms of supply of goods or services or both such as sale, transfer, barter,exchange, licence, rental, lease or disposal made or agreed to be made for aconsideration by a person in the course or furtherance of business;2. import of services for a consideration whether or not in the course or furtherance of business; 3. the activities specified in Schedule I, made or agreed to be made without a consideration; and 4. the activities to be treated as supply of goods or supply of services as referred to in Schedule II."
                },
                q2: {
                    text: "Whether transfer of goods to another branch located outside the State is taxable?",
                    ans: " In terms of Section 25(4) of the CGST Act, 2017, every person who is required to obtain separate registration for every branch located in different state or union territory shall be treated as distinct persons. Accordingly, the supply of goods (stock transfers) to a branch located outside the State would qualify as supply, liable to tax in terms of clause 2 to Schedule I of the CGST Act, 2017. Further, it is important to note that,supply of goods to a branch / unit located within the same State having separate registration would also be liable to tax since both such units (supplying unit and recipient unit) would qualify as distinct person in terms of Section 25(4). "
                },
                q3: {
                    text: "Whether gifts given by employer to employee will also qualify as supply?",
                    ans: " In terms of Explanation appended to Section 15 it is clarified that employer and employee will be deemed to be related persons. Accordingly, in terms clause 2 of Schedule I, gift exceeding ` 50,000/- by an employer to employee will be a supply,when made in the course or furtherance of business and will be liable to tax. As, in terms of proviso to clause 2 of Schedule I, any gifts for a value not exceeding ` 50,000/- in a financial year will not qualify as supply and as such will not be liable totax. "
                },
                q4: {
                    text: "What is composite supply?",
                    ans: "In terms of Section 2(30) of CGST Act, 2017, composite supply means a supply made by a taxable person to a recipient consisting of two or more taxable supplies of goods or services or both, or any combination thereof, which are naturally bundled and supplied in conjunction with each other in the ordinary course of business, one of which is a principal supply. The illustration of composite supply appended to Section 2(30) is as follows: Where goods are packed and transported with insurance, the supply of goods, packing materials, transport and insurance is a composite supply and supply of goods is a principal supply. "
                },            
                q5: {
                    text: "What is Mixed Supply?",
                    ans: "In terms of Section 2(74), mixed supply means two or more individual supplies of goods or services or any combination thereof, made in conjunction with each other by a taxable person for a single price where such supply does not constitute a composite supply. The illustration of mixed supply appended to Section 2(74) is as follows:A supply of a package consisting of canned foods, sweets, chocolates, cakes, dry fruits,aerated drink and fruit juices when supplied for a single price is a mixed supply. Each of these items can be supplied separately and is not dependent on any other. It shall not be a mixed supply if these items are supplied separately."
                },
                q6: {
                    text: "How to ascertain the taxable value for levy of CGST & SGST/UTGST?",
                    ans: " In terms of Section 25(4) of the CGST Act, 2017, every person who is required to obtain separate registration for every branch located in different state or union territory shall be treated as distinct persons. Accordingly, the supply of goods (stock transfers) to a branch located outside the State would qualify as supply, liable to tax in terms of clause 2 to Schedule I of the CGST Act, 2017. Further, it is important to note that,supply of goods to a branch / unit located within the same State having separate registration would also be liable to tax since both such units (supplying unit and recipient unit) would qualify as distinct person in terms of Section 25(4). Section 15 of the CGST Act, 2017 specifies that the value of supply of goods or services or both shall be the transaction value, which is the price actually paid or payable for the said supply of goods or services or both where the supplier and the recipient of the supply are not related and the price is the sole consideration for the supply. Further, Section 15 provides for certain inclusions which will form part of the value viz., incidental expenses, commission, interest, penalty etc. In cases where the supplier and recipient are related persons or where the price is not the sole consideration, the provisions and method for ascertaining the value of taxable supply as prescribed in the Central Goods and Services Tax Rules (“the CGST Rules” or “the CGST Rules, 2017”) (Rules 27 – 35) shall apply."
                },
                q7: {
                    text: "Whether the tax on intra-State supplies is applicable to every supply?",
                    ans: "No, section 9(1) which is the charging provision for levy and collection of tax on intraState supplies excludes supply of alcoholic liquor for human consumption. Further, in terms of Section 9(2), tax on supply of petroleum crude, high speed diesel, motor spirit, natural gas and aviation turbine fuel shall be levied with effect from such date as may be notified by the Government on the recommendations of the Council. Accordingly, supply of alcoholic liquor for human consumption is not liable to tax under the CGST Act,2017."
                },
                q8: {
                    text: "Should tax payable on reverse charge basis be reduced from the value of the supply?",
                    ans: "Contractually if tax is not included in the price payable towards the supply, then tax payable on reverse charge basis cannot be reduced from the value of supply that is paid to the supplier. And if included, then due effect to this understanding must flow by making the deduction from the payment"
                },
                q9: {
                    text: "What are implications if supplier charges GST on the invoice though reverse charge is applicable?",
                    ans: "No, section 9(1) which is the charging provision for levy and collection of tax on intraState supplies excludes supply of alcoholic liquor for human consumption. Further, in terms of Section 9(2), tax on supply of petroleum crude, high speed diesel, motor spirit, natural gas and aviation turbine fuel shall be levied with effect from such date as may be notified by the Government on the recommendations of the Council. Accordingly, supply of alcoholic liquor for human consumption is not liable to tax under the CGST Act,2017.Recipient is free to reduce the GST charged from the value of invoice and pay only the net amount but liable to discharge the reverse charge obligation separately."
                },
                q10: {
                    text: "In case POS is in the supplier-State, is GST on reverse charge payable by recipient?",
                    ans: "No, if POS is not in the State of the recipient, there is no occasion for the State of recipient to accept tax on reverse charge basis. In the absence of a specific provision in law, such supplies remain untaxed."
                }
            }
        };
        res.send(questionJson);
        return;
    },

}

module.exports = questions;
