export const PAPERS = [
  {
    title: "Sequence to Sequence Learning with Neural Networks",
    authors: "Ilya Sutskever, Oriol Vinyals, Quoc V. Le",
    venue: "NeurIPS",
    year: "2014",
    url: "https://arxiv.org/pdf/1409.3215",
    note:
      "Introduced the encoder–decoder LSTM formulation that maps one variable-length sequence to another, laying the groundwork for modern neural machine translation and the sequence models that followed.",
    tags: ["Deep Learning", "NLP", "Seq2Seq"],
  },
  {
    title:
      "Neural Machine Translation by Jointly Learning to Align and Translate",
    authors: "Dzmitry Bahdanau, Kyunghyun Cho, Yoshua Bengio",
    venue: "ICLR",
    year: "2015",
    url: "https://arxiv.org/pdf/1409.0473",
    note:
      "The direct answer to the fixed-length bottleneck in encoder–decoder models: instead of squeezing a whole source sentence into one vector, the decoder learns to soft-search the input and weight the parts that matter for each output token. This is the origin of attention, and it is why I keep it next to the seq2seq paper.",
    tags: ["Attention", "NLP", "Deep Learning"],
  },
]
